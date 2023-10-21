import { useContext } from "react";
import GitHubDataContext from "../../context/GitHubDataContext";
import Repository from "../Repository/Repository";

function RepositoryList() {
    const { repositories } = useContext(GitHubDataContext);
   
    return(
        <div className="">
            {repositories.map((repository) => (
                <Repository key={repository.id} repository={repository} />
            ))}        
        </div>
    )
}

export default RepositoryList;