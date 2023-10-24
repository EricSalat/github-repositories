import "./Repository.css";

interface RepositoryLanguageProps {
    language: string | null;
}

/**
 * RepositoryLanguage component displays a colored dot and the programming language.
 * @component
 * @param {RepositoryLanguageProps} props - The properties for the RepositoryLanguage component.
 * @returns {JSX.Element|null} The rendered RepositoryLanguage component, or null if the language is null.
 */
function RepositoryLanguage({ language }: RepositoryLanguageProps) {
    /** 
     * Initialize variables to store dot colors.
     * */
    var languageDotColor: string | null = "";
    var LanguageDotColorBorder: string | null = "";
    /**
     *  Determine dot colors based on the programming language.
     */
    switch (language) {
        case "HTML":
            languageDotColor = "#dd4b25";
            LanguageDotColorBorder = "#a0290a";
            break;
        case "CSS":
            languageDotColor = "#0070b8";
            LanguageDotColorBorder = "#2146a0";
            break;
        case "JavaScript":
            languageDotColor = "#efd81d";
            LanguageDotColorBorder = "#cab822";
            break;
        case "TypeScript":
            languageDotColor = "#2f74c0";
            LanguageDotColorBorder = "#2a609b";
            break;
        case "PHP":
            languageDotColor = "#7377ad";
            LanguageDotColorBorder = "#454a6f";
            break;
        case "Java":
            languageDotColor = "#b07219";
            LanguageDotColorBorder = "#6c510f";
            break;
        case "Python":
            languageDotColor = "#40b149";
            LanguageDotColorBorder = "#1f7d38";
            break;
        case "Go":
            languageDotColor = "#74cddd";
            LanguageDotColorBorder = "#3897ab";
            break;
        default:
            languageDotColor = "#d6dde1";
            LanguageDotColorBorder = "#9da4a7";
    }


    if (language != null) {

        return (
            <div className="repo-language-layout d-flex align-items-baseline" >
                <span className="repo-language-color" style={{ backgroundColor: languageDotColor, borderColor: LanguageDotColorBorder }}></span>
                <p className="repo-language">{language}</p>
            </div>
        );
    } else {
        null
    }
}

export { RepositoryLanguage };