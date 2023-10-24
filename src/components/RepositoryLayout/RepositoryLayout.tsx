import { useState, useEffect } from "react";
import { RepositoryList } from "../RepositoryList/RepositoryList";
import { SearchUser } from "../SearchUser/SearchUser";
import { GitHubDataContext } from "../../context/GitHubDataContext";
import { fetchDataFromGitHub } from "../../logic/GitHubAPICall";
import { Header } from "../Header/Header";
import { SearchLayout } from "../SearchLayout/SearchLayout";
import "./RepositoryLayout.css";


/**
 * Component responsible for rendering the repository layout and managing user input.
 * @component
 */
function RepositoryLayout() {
    /**
     * State variable to store the GitHub username entered by the user.
     * @type {string}
     */
    const [username, setUsername] = useState<string>("EricSalat");

    /**
     * State variable to store an array of repositories fetched from the GitHub API.
     * @type {Array}
     */
    const [repositories, setRepositories] = useState<any[]>([]);

    /**
     * State variable to store the search term entered by the user for repository filtering.
     * @type {string}
     */
    const [searchTerm, setSearchTerm] = useState<string>("");

    /**
     * State variable to store the selected programming language for repository filtering.
     * @type {string}
     */
    const [selectedLanguage, setSelectedLanguage] = useState<string>("");

    /**
     * State variable to track whether data is currently being loaded from the GitHub API.
     * @type {boolean}
     */
    const [dataIsLoading, setDataIsLoading] = useState(false)

    var repositoriesAmount = repositories.length;


    useEffect(() => {
        /**
         * Fetch data from the GitHub API for the specified username and update the component state.
         * @param {string} username - The GitHub username to fetch data for.
         */
        fetchDataFromGitHub(username)
            .then((data) => {
                setRepositories(data);
                setDataIsLoading(true);
            })
            .catch((error) => console.error("Error fetching the data: ", error));
    }, [username]);

    /**
     * Handles the selection of a programming language from the DropdownButton component for filtering repositories.
     * @param {string} language - The selected programming language.
     */
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

export { RepositoryLayout };
