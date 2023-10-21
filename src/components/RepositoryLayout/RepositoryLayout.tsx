import { useState, useEffect } from "react";
import RepositoryList from "../RepositoryList/RepositoryList";
import SearchBar from "../SearchBar/SearchBar";
import GitHubDataContext from "../../context/GitHubDataContext"
import { fetchDataFromGitHub } from "../../logic/GitHubAPICall";


function RepositoryLayout() {
    var username = "EricSalat"
    const [repositories, setRepositories] = useState<any[]>([]);


    useEffect(() => {
        fetchDataFromGitHub(username)
        .then((data) => setRepositories(data))
        .catch((error) => 
            console.error("Error fetching the data: ", error));
    }, []);



    return(
        <GitHubDataContext.Provider value={{ repositories }}>
            <div>
                <SearchBar />
                <RepositoryList />
            </div>
        </GitHubDataContext.Provider>
    );
}

export default RepositoryLayout;