import "./DropdownButton.css";
import { useState } from "react";

interface DropdownButtonProps {
    onLanguageSelect: (language: string) => void;
}

/**
 * DropdownButton component for selecting a programming language.
 * @component
 * @param {DropdownButtonProps} props - The properties for the DropdownButton component.
 * @returns {JSX.Element} The rendered DropdownButton component.
 */
const DropdownButton: React.FC<DropdownButtonProps> = ({ onLanguageSelect }) => {
    const setSelectedLanguage = useState<string>("")[1];

    /**
     * Handles the selection of a programming language and triggers the onLanguageSelect callback.
     * @param {string} language - The selected programming language.
     */
    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
        onLanguageSelect(language);
    };


    return (
        <div className="text-center d-flex align-self-center ps-4">
            <div className="btn-group">
                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Languages
                </button>
                <ul className="dropdown-menu text-center">
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleLanguageSelect("HTML")}>
                            HTML
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleLanguageSelect("CSS")}>
                            CSS
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleLanguageSelect("JavaScript")}>
                            JavaScript
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleLanguageSelect("TypeScript")}>
                            TypeScript
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleLanguageSelect("PHP")}>
                            PHP
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleLanguageSelect("Java")}>
                            Java
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleLanguageSelect("Python")}>
                            Python
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#" onClick={() => handleLanguageSelect("Go")}>
                            Go
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export { DropdownButton };
