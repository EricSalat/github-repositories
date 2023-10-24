import "./RepositoryList.css"
import { RxCross2 } from "react-icons/rx";

interface ClearButtonProps {
  clearFilters: () => void;
};

function ClearButton({ clearFilters }: ClearButtonProps) {

  const handleClearClick = () => {
    clearFilters();
  };

  return (
    <button className="clear-button ms-4" onClick={handleClearClick}>
      <RxCross2 />
      Clear Filter
    </button>
  );
};

export { ClearButton };
