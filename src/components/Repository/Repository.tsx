import "./Repository.css";
import RepositoryLanguage from "./RepositoryLanguage";



interface RepositoryProps {
    repository: {
        id: number;
        name: string;
        visibility: string;
        description: string;
        updated_at: string;
        language: string | null ;
        html_url: string;
    };
}


function Repository({ repository }: RepositoryProps) {

    const visibilityText = repository.visibility === "public" ? "Public" : "Private";

    function getFormattedDate(updatedAt: string): string {
      const isoDate: string = updatedAt;
      const fullDate: Date = new Date(isoDate);
      const day: string = fullDate.getDate().toString().padStart(2, '0');
      const month: string = (fullDate.getMonth() + 1).toString().padStart(2, '0');
      const year: number = fullDate.getFullYear();
      return `${day}/${month}/${year}`;
    }

    const formattedUpdatedAt = getFormattedDate(repository.updated_at);

    return (
      <div className="repo-layout d-flex flex-column m-4 py-4 ps-4" key={repository.id}>
        <div className="d-flex align-items-center pt-2">
          <h2 className="repo-title">
            <a href={repository.html_url} target="_blank">{repository.name}</a>
          </h2>
          <span className="repo-visibility">
            {visibilityText}
            </span>
        </div>
        <p className="repo-description">{repository.description}</p>
        <div className="d-flex">
          <RepositoryLanguage language={repository.language}/>
          <p className="repo-update">Updated at {formattedUpdatedAt}</p>
        </div>
      </div>
    );
  }

export default Repository;