import "./SearchBar.css";

interface SearchBarProps {
    searchTerm: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ searchTerm, onChange }: SearchBarProps) {
    return (

            <div className="search-box d-flex">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search by repository..."
                    value={searchTerm}
                    onChange={onChange}
                />
            </div>

    );
}

export default SearchBar;