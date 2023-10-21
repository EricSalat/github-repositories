import { useState, useEffect } from "react";
import RepositoryList from "../RepositoryList/RepositoryList";
import SearchBar from "../SearchBar/SearchBar";
import GitHubDataContext from "../../context/GitHubDataContext"
import { fetchDataFromGitHub } from "../../logic/GitHubAPICall";


function RepositoryLayout() {
    var username = "EricSalat"
    const [repositories, setRepositories] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");



    useEffect(() => {
        fetchDataFromGitHub(username)
        .then((data) => setRepositories(data))
        .catch((error) => 
            console.error("Error fetching the data: ", error));
        }, []);
        
    console.log(searchTerm);
        
    return(
        <GitHubDataContext.Provider value={{ repositories }}>
            <div>
                <SearchBar 
                    searchTerm={searchTerm} 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)} />
                <RepositoryList searchTerm={searchTerm} />
            </div>
        </GitHubDataContext.Provider>
    );

}

export default RepositoryLayout;