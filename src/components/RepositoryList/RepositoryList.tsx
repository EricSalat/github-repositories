import { useContext } from "react";
import GitHubDataContext from "../../context/GitHubDataContext";
import Repository from "../Repository/Repository";

function RepositoryList() {
    const repositories = useContext(GitHubDataContext);
   
    return(
        <div className="">
            {repositories.map((repo) => (
                <Repository key={repo.id} data={repo} />
            ))}        
        </div>
    )
}

export default RepositoryList;