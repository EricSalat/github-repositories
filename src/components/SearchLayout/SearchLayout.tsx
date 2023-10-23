import { ChangeEvent } from "react";
import SearchBar from "../SearchBar/SearchBar";
import DropdownButton from "../DropdownButton/DropdownButton";

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
      <div className="d-flex justify-content-between">
        <SearchBar searchTerm={searchTerm} onChange={handleSearchInputChange} />
        <DropdownButton onLanguageSelect={onLanguageSelect} />
      </div>
    );
  };
  
  export default SearchLayout;