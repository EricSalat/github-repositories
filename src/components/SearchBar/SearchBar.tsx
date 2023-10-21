import "./SearchBar.css";

function SearchBar() {
    return(
        <div className="search-container">
            <input type="text" id="search-input" placeholder="Find a repository..."/>
        </div>
    );
}
export default SearchBar;