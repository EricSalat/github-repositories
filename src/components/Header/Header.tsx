import "./Header.css";
import { BsGithub } from "react-icons/bs";
import { GoRepo } from "react-icons/go";

interface HeaderProps {
  username: string;
  repositoriesAmount: number;
}


function Header({ username, repositoriesAmount }: HeaderProps) {
  return (
    <header className="d-flex justify-content-between">
      <div className="d-flex align-items-center py-4 ms-4">
        <BsGithub style={{ height: "32px", width: "32px", color: "#ffffff" }} />
        <p className="header-username">{username} </p>
      </div>
      <div className="d-flex align-items-center me-4">
        <GoRepo style={{ height: "24px", width: "24px", color: "#ffffff" }} />
        <p className="header-repositories">{repositoriesAmount} repositories</p>
      </div>
    </header>
  );
}

export { Header };