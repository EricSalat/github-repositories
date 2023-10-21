import RepositoryList from "../RepositoryList/RepositoryList";
import SearchBar from "../SearchBar/SearchBar";

function RepositoryLayout() {
    return(
        <div>
            <SearchBar />
            <RepositoryList />
        </div>
    );
}

export default RepositoryLayout;