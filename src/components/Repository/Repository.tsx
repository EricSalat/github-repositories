import "./Repository.css";
import RepositoryLanguage from "./RepositoryLanguage";

function Repository({ data }) {
    return (
      <div className="repo-layout d-flex flex-column py-4 ps-2">
        <div className="d-flex align-items-center">
          <h2 className="repo-title">
            <a href={data.html_url}>{data.name}</a>
          </h2>
          <span className="repo-visibility">{data.private ? "Private" : "Public"}</span>
        </div>
        <p className="repo-description">{data.description}</p>
        <div className="d-flex align-items-baseline">
          <RepositoryLanguage language={data.language} />
          <p className="repo-update mx-2">Updated {data.updated_at}</p>
        </div>
      </div>
    );
  }

export default Repository;