import "./SearchBar.css";

interface SearchBarProps {
    searchTerm: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ searchTerm, onChange }: SearchBarProps) {
    return (
        <div className="bg-warning">
            <div className="search-box bg-primary">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search by repository name..."
                    value={searchTerm}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

export default SearchBar;