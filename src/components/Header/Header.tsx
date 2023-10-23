import "./Header.css";
import { BsGithub } from "react-icons/bs";
import { GoRepo } from "react-icons/go";

function Header({}) {
    return(
        <header className="d-flex justify-content-between">
          <div className="d-flex align-items-center py-4 ms-2">
            <BsGithub style={{ height: "32px", width: "32px"}} />
            <p className="header-username">Username </p>
          </div> 
          <div className="d-flex align-items-center me-2">
              <GoRepo style={{ height: "24px", width: "24px"}} />
              <p className="header-repositories">X repositories</p>
          </div> 
        </header>
    );
}

export default Header