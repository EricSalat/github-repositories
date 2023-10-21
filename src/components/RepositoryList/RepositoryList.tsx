import { useContext } from "react";
import GitHubDataContext from "../../context/GitHubDataContext";
import Repository from "../Repository/Repository";

function RepositoryList({ searchTerm }: { searchTerm: string }) {
    const { repositories } = useContext(GitHubDataContext);

    //Filter repositories based on search term

    const filteredRepositories = repositories.filter((repository) =>
        repository.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
   
    
    return(
        <div className="">
            {filteredRepositories.length > 0 ? (
                filteredRepositories.map((repository) => (
                    <Repository key={repository.id} repository={repository} />
                ))
            ) : (
                <p>There are 0 repositories matching your search <span style={{fontWeight: "bold"}}>"{searchTerm}"</span></p>
            )}      
        </div>
    )
}

export default RepositoryList;