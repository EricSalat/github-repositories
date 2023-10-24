import { ChangeEvent } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { DropdownButton } from "../DropdownButton/DropdownButton";
import "./SearchLayout.css"

/**
 *  Props for the SearchLayout component.
 */
interface SearchLayoutProps {
  /** 
   * The current search term. 
   */
  searchTerm: string;
  /** 
   * Callback to handle changes in the search term. 
   */
  onChangeSearchTerm: (newSearchTerm: string) => void;
  /** 
   * Callback to handle the selection of a programming language.
   */
  onLanguageSelect: (language: string) => void;
}


/**
 * SearchLayout component for managing search input and language selection.
 * @component
 * @param {SearchLayoutProps} props - The properties for the SearchLayout component.
 * @returns {JSX.Element} The rendered SearchLayout component.
 */
const SearchLayout: React.FC<SearchLayoutProps> = ({
  searchTerm,
  onChangeSearchTerm,
  onLanguageSelect,
}) => {
  /**
   * Handles changes in the search input and calls the onChangeSearchTerm callback.
   * @param {ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeSearchTerm(event.target.value);
  };

  return (
    <div className="search-layout d-flex justify-content-start m-4">
      <SearchBar searchTerm={searchTerm} onChange={handleSearchInputChange} />
      <DropdownButton onLanguageSelect={onLanguageSelect} />
    </div>
  );
};

export { SearchLayout };