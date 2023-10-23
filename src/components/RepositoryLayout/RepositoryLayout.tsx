import React, { useState, useEffect } from "react";
import RepositoryList from "../RepositoryList/RepositoryList";
import SearchUser from "../SearchUser/SearchUser";
import SearchBar from "../SearchBar/SearchBar";
import GitHubDataContext from "../../context/GitHubDataContext";
import { fetchDataFromGitHub } from "../../logic/GitHubAPICall";
import DropdownButton from "../DropdownButton/DropwdownButton";
import Header from "../Header/Header";

function RepositoryLayout() {
    const [username, setUsername] = useState<string>("EricSalat");
    const [repositories, setRepositories] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedLanguage, setSelectedLanguage] = useState<string>("");
    const [dataIsLoading, setDataIsLoading] = useState(false)


    useEffect(() => {
        fetchDataFromGitHub(username)
            .then((data) => {
                setRepositories(data);
                setDataIsLoading(true);
            })
            .catch((error) => console.error("Error fetching the data: ", error));
    }, [username]);

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
    };

    useEffect(() => {
        console.log("El username ha cambiado a: ", username);
      }, [username]);

    return (
        <GitHubDataContext.Provider value={{ repositories }}>
            <div>
                
                <SearchUser 
                    onSubmit={(newUsername) => {
                        setUsername(newUsername); // Actualizar el estado username en RepositoryLayout
                      }}
                />
                <Header />
                <SearchBar
                    searchTerm={searchTerm}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setSearchTerm(event.target.value)
                    }
                />
                <DropdownButton 
                    onLanguageSelect={handleLanguageSelect} 
                />
                <RepositoryList 
                    searchTerm={searchTerm} 
                    selectedLanguage={selectedLanguage}
                    dataIsLoading={dataIsLoading}

                />
            </div>
        </GitHubDataContext.Provider>
    );

   
}

export default RepositoryLayout;
