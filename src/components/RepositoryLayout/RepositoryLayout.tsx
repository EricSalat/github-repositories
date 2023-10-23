import { useState, useEffect } from "react";
import RepositoryList from "../RepositoryList/RepositoryList";
import SearchUser from "../SearchUser/SearchUser";
import GitHubDataContext from "../../context/GitHubDataContext";
import { fetchDataFromGitHub } from "../../logic/GitHubAPICall";
import Header from "../Header/Header";
import SearchLayout from "../SearchLayout/SearchLayout";
import "./RepositoryLayout.css";

function RepositoryLayout() {
    const [username, setUsername] = useState<string>("EricSalat");
    const [repositories, setRepositories] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedLanguage, setSelectedLanguage] = useState<string>("");
    const [dataIsLoading, setDataIsLoading] = useState(false)
    
    var repositoriesAmount = repositories.length;


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

    return (
        <GitHubDataContext.Provider value={{ repositories }}>
            <div>
                <SearchUser 
                    onSubmit={(newUsername) => {
                        setUsername(newUsername); // Actualizar el estado username en RepositoryLayout
                      }}
                />
                <div className="repository-layout">
                    <Header
                        username={username}
                        repositoriesAmount={repositoriesAmount}
                    />
                    <SearchLayout
                        searchTerm={searchTerm}
                        onChangeSearchTerm={(newSearchTerm) => setSearchTerm(newSearchTerm)}
                        onLanguageSelect={handleLanguageSelect}
                    />
                    <RepositoryList
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                        dataIsLoading={dataIsLoading}
                        
                    />
                </div>
            </div>
        </GitHubDataContext.Provider>
    );

   
}

export default RepositoryLayout;
