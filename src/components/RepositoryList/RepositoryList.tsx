import { useContext } from "react";
import GitHubDataContext from "../../context/GitHubDataContext";
import Repository from "../Repository/Repository";

interface RepositoryListProps {
    searchTerm: string;
    selectedLanguage: string;
}

const RepositoryList: React.FC<RepositoryListProps> = ({ searchTerm, selectedLanguage }) => {
    const { repositories } = useContext(GitHubDataContext);

    const filteredRepositories = repositories.filter((repository) => {
        const nameMatch = repository.name.toLowerCase().includes(searchTerm.trimStart().toLowerCase());
        const languageMatch = !selectedLanguage || repository.language === selectedLanguage;
        return nameMatch && languageMatch;
    });

    return (
        <div className="">
            {filteredRepositories.length > 0 ? (
                filteredRepositories.map((repository) => (
                    <Repository key={repository.id} repository={repository} />
                ))
            ) : (
                <p>Ninguna coincidencia</p>
            )}
        </div>
    );
};

export default RepositoryList;





