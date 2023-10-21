import "./Repository.css";
import RepositoryLanguage from "./RepositoryLanguage";

function Repository() {
    return(
        <div className="repo-layout d-flex flex-column py-4 ps-2">
            <div className="d-flex align-items-center">
                <h2 className="repo-title">
                    <a href="">
                    refactor-web-profesional
                    </a>
                </h2>
                <span className="repo-visibility">Public</span>
            </div>
            <p className="repo-description">Description of the project</p>
            <div className="d-flex align-items-baseline">
                <RepositoryLanguage />
                <p className="repo-update mx-2">Updated 6 days ago</p>
            </div>
        </div>
    );
}

export default Repository;