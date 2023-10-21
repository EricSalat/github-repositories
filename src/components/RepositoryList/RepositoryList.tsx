import { useContext } from "react";
import GitHubDataContext from "../../context/GitHubDataContext";
import Repository from "../Repository/Repository";

function RepositoryList({ searchTerm }: { searchTerm: string }) {
    const { repositories } = useContext(GitHubDataContext);

    // Filtrar los repositorios basados en el término de búsqueda

    const filteredRepositories = repositories.filter((repository) =>
        repository.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
   
    return(
        <div className="">
            {filteredRepositories.map((repository) => (
                <Repository key={repository.id} repository={repository} />
            ))}        
        </div>
    )
}

export default RepositoryList;