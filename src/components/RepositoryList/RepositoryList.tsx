import Repository from "../Repository/Repository";
import SearchBar from "../SearchBar/SearchBar.tsx";

function RepositoryList() {
    return(
        <div className="col-4">
            <SearchBar />
            {/* <DropdownButton /> */}
            <Repository />        
        </div>
    )
}

export default RepositoryList;