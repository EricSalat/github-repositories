import { useContext} from "react";
import GitHubDataContext from "../../context/GitHubDataContext";
import Repository from "../Repository/Repository";

interface RepositoryListProps {
    searchTerm: string;
    selectedLanguage: string;
    dataIsLoading: boolean;
}

const RepositoryList: React.FC<RepositoryListProps> = ({ searchTerm, selectedLanguage, dataIsLoading}) => {
    const { repositories } = useContext(GitHubDataContext);
    // const [dataIsLoading, setDataIsLoading] = useState(false)

    const filteredRepositories = repositories.filter((repository) => {
        const nameMatch = repository.name.toLowerCase().includes(searchTerm.trimStart().toLowerCase());
        const languageMatch = !selectedLanguage || repository.language === selectedLanguage;
        return nameMatch && languageMatch;
    });

    return (
        <div className="">
          {!dataIsLoading ? (
            <p className="ps-4">Loading data...</p>
          ) : (
            <>
              {filteredRepositories.length > 0 ? (
                searchTerm !== "" && selectedLanguage === "" ? (
                  <p>
                    {filteredRepositories.length} repositories found matching "<span style={{ fontWeight: "bold" }}>
                      {searchTerm}
                    </span>"
                  </p>
                ) : searchTerm === "" && selectedLanguage !== "" ? (
                  <p>
                    {filteredRepositories.length} repositories found written in{" "}
                    <span style={{ fontWeight: "bold" }}>{selectedLanguage}</span>
                  </p>
                ) : searchTerm !== "" && selectedLanguage !== "" ? (
                  <p>
                    {filteredRepositories.length} repositories found matching "<span style={{ fontWeight: "bold" }}>
                      {searchTerm}
                    </span>" written in <span style={{ fontWeight: "bold" }}>{selectedLanguage}</span>
                  </p>
                ) : null
              ) : null}
    
              {filteredRepositories.length > 0 ? (
                filteredRepositories.map((repository) => (
                  <Repository key={repository.id} repository={repository} />
                ))
              ) : (
                <p className="ps-4">No matches</p>
              )}
            </>
          )}
        </div>
      );
};

export default RepositoryList;





