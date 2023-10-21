import React, { useState } from "react";

interface DropdownButtonProps {
    onLanguageSelect: (language: string) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ onLanguageSelect }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("");

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
        onLanguageSelect(language);
    };

    return (
        <details className="">
            <summary>Languages</summary>
            <ul>
                <li>
                    <a href="#" onClick={() => handleLanguageSelect("HTML")}>
                        HTML
                    </a>
                    <a href="#" onClick={() => handleLanguageSelect("CSS")}>
                        CSS
                    </a>
                    <a href="#" onClick={() => handleLanguageSelect("JavaScript")}>
                        JavaScript
                    </a>
                    <a href="#" onClick={() => handleLanguageSelect("TypeScript")}>
                        TypeScript
                    </a>
                    <a href="#" onClick={() => handleLanguageSelect("PHP")}>
                        PHP
                    </a>
                    <a href="#" onClick={() => handleLanguageSelect("Java")}>
                        Java
                    </a>
                    <a href="#" onClick={() => handleLanguageSelect("Python")}>
                        Python
                    </a>
                    <a href="#" onClick={() => handleLanguageSelect("Go")}>
                        Go
                    </a>
                </li>
            </ul>
        </details>
    );
};

export default DropdownButton;
