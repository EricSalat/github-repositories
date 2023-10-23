import React, { useState, useEffect } from "react";
import RepositoryList from "../RepositoryList/RepositoryList";
import SearchBar from "../SearchBar/SearchBar";
import GitHubDataContext from "../../context/GitHubDataContext";
import { fetchDataFromGitHub } from "../../logic/GitHubAPICall";
import DropdownButton from "../DropdownButton/DropwdownButton";

function RepositoryLayout() {
    const username = "EricSalat";
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
    }, []);

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
    };

    return (
        <GitHubDataContext.Provider value={{ repositories }}>
            <div>
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
