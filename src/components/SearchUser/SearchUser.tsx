import "./SearchUser.css";
import { useState } from 'react';

interface SearchUserProps {
  onSubmit: (newUsername: string) => void;
}

/**
 * Component responsible for user input and searching by username.
 * @param {object} props - The component's props.
 * @param {function} props.onSubmit - A callback function to handle the submission of a username.
 */
function SearchUser({ onSubmit }: SearchUserProps) {
    /**
     * State for tracking the input value.
     * @type {string}
     */
    const [inputValue, setInputValue] = useState("");

    /**
     * Handles the form submission.
     * @param {React.FormEvent} event - The form submission event.
     */
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(inputValue);
      };
  
  
    return (
        <form onSubmit={handleSubmit} className="search-box-user d-flex align-items-center justify-content-center m-auto">
          <input
            className="search-input-user"
            type="text"
            placeholder="Search by username..."
            value={inputValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(event.target.value)
            }
          />
          <button className="btn submit-button ms-3" type="submit">Submit</button>
        </form>
  );
}

export default SearchUser;
