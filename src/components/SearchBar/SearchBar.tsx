import "./SearchBar.css";

interface SearchBarProps {
    searchTerm: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ searchTerm, onChange }: SearchBarProps) {
    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={onChange}
            />
        </div>
    );
}

export default SearchBar;