import "./Repository.css";
import RepositoryLanguage from "./RepositoryLanguage";
// import GitHubRepositoryData from "../../context/GitHubDataContext";

interface RepositoryProps {
    repository: {
        id: number;
        name: string;
        visibility: string;
        description: string;
        updated_at: string;
        language: string;
    };
}

function Repository({ repository }: RepositoryProps) {
    return (
      <div className="repo-layout d-flex flex-column py-4 ps-2" key={repository.id}>
        <div className="d-flex align-items-center">
          <h2 className="repo-title">
            <a href="">{repository.name}</a>
          </h2>
          <span className="repo-visibility">{repository.visibility}</span>
        </div>
        <p className="repo-description">Descripcion of the project {repository.description}</p>
        <div className="d-flex align-items-baseline">
          <RepositoryLanguage />
          <p className="repo-update mx-2">Updated at {repository.updated_at}</p>
        </div>
      </div>
    );
  }

export default Repository;