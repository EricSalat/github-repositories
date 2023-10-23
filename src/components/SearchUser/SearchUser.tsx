import "./SearchUser.css";
import { useState } from 'react';

interface SearchUserProps {
  onSubmit: (newUsername: string) => void;
}

function SearchUser({ onSubmit }: SearchUserProps) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(inputValue); // Enviar el valor introducido a la función onSubmit
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
          <button className="submit-button ms-3" type="submit">Submit</button>
        </form>
  );
}

export default SearchUser;
