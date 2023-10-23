import { ChangeEvent } from "react";
import SearchBar from "../SearchBar/SearchBar";
import DropdownButton from "../DropdownButton/DropdownButton";
import "./SearchLayout.css"

interface SearchLayoutProps {
    searchTerm: string;
    onChangeSearchTerm: (newSearchTerm: string) => void;
    onLanguageSelect: (language: string) => void;
  }
  
  const SearchLayout: React.FC<SearchLayoutProps> = ({
    searchTerm,
    onChangeSearchTerm,
    onLanguageSelect,
  }) => {
    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      //Calls onChangeSearchTerm with the value of the input
      onChangeSearchTerm(event.target.value);
    };
  
    return (
      <div className="search-layout d-flex justify-content-start m -4">
        <SearchBar searchTerm={searchTerm} onChange={handleSearchInputChange} />
        <DropdownButton onLanguageSelect={onLanguageSelect} />
      </div>
    );
  };
  
  export default SearchLayout;