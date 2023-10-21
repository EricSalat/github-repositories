import "./DropdownButton.css";
import { useState } from "react";

function DropdownButton({selectedLanguage}) {

    const [selectedLanguage, setSelectedLanguage] = useState<string>("");

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
      };

    return(
        <details className="">
        <summary>Languages</summary>
        <ul >
          <li >
            <a href="#" onClick={() => handleLanguageSelect("HTML")}>HTML</a>
          </li>
          <li >
            <a href="#" onClick={() => handleLanguageSelect("CSS")}>CSS</a>
          </li>
          <li>
            <a href="#" onClick={() => handleLanguageSelect("JavaScript")}>JavaScript</a>
          </li>
          <li >
            <a href="#" onClick={() => handleLanguageSelect("TypeScript")}>TypeScript</a>
          </li>
          <li>
            <a href="#" onClick={() => handleLanguageSelect("PHP")}>PHP</a>
          </li>
          
        </ul>
      </details>
    );
}

export default DropdownButton;