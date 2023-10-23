import { useContext} from "react";
import GitHubDataContext from "../../context/GitHubDataContext";
import Repository from "../Repository/Repository";
import ClearButton from "./ClearButton";
import "./RepositoryList.css";


interface RepositoryListProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (selectedLanguage: string) => void;
  dataIsLoading: boolean;
}

const RepositoryList: React.FC<RepositoryListProps> = ({ searchTerm, setSearchTerm, selectedLanguage, setSelectedLanguage, dataIsLoading}) => {
    const { repositories } = useContext(GitHubDataContext);

    const filteredRepositories = repositories.filter((repository) => {
        const nameMatch = repository.name.toLowerCase().includes(searchTerm.trimStart().toLowerCase());
        const languageMatch = !selectedLanguage || repository.language === selectedLanguage;
        return nameMatch && languageMatch;
    });

    const clearFilters = () => {
      setSearchTerm("");
      setSelectedLanguage("");
    };

    return (
        <div className="">
          {!dataIsLoading ? (
            <p className="ps-4">Loading data...</p>
          ) : (
            <>
              {filteredRepositories.length > 0 ? (
                searchTerm !== "" && selectedLanguage === "" ? (
                  <div className="d-flex align-items-baseline">
                    <p className="ps-4">
                      {filteredRepositories.length} repositories found matching "<span style={{ fontWeight: "bold" }}>
                        {searchTerm}
                      </span>"
                    </p>
                    <ClearButton clearFilters={clearFilters} />

                  </div>
                ) : searchTerm === "" && selectedLanguage !== "" ? (
                  <div className="d-flex align-items-baseline">
                    <p className="ps-4">
                      {filteredRepositories.length} repositories found written in{" "}
                      <span style={{ fontWeight: "bold" }}>{selectedLanguage}</span>
                    </p>
                    <ClearButton clearFilters={clearFilters} />

                  </div>
                ) : searchTerm !== "" && selectedLanguage !== "" ? (
                  <div className="d-flex align-items-baseline">
                    <p className="ps-4">
                      {filteredRepositories.length} repositories found matching "<span style={{ fontWeight: "bold" }}>
                        {searchTerm}
                      </span>" written in <span style={{ fontWeight: "bold" }}>{selectedLanguage}</span>
                    </p>
                    <ClearButton clearFilters={clearFilters} />

                  </div>
                ) : null
              ) : null}
    
              {filteredRepositories.length > 0 ? (
                filteredRepositories.map((repository) => (
                  <Repository key={repository.id} repository={repository} />
                ))
              ) : (
                <div className="d-flex align-items-baseline">
                  <p className="ps-4">No matches</p>
                  <ClearButton clearFilters={clearFilters} />

                </div>
              )}
            </>
          )}
        </div>
      );
};

export default RepositoryList;





