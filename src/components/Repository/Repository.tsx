// import React from "react";
import "./Repository.css";
import { RepositoryLanguage } from "./RepositoryLanguage";


/**
 * Represents a single repository component.
 */
interface RepositoryProps {
  repository: {
    /** 
     * Unique identifier of the repository. 
     */
    id: number;
    /** The name of the repository. */
    name: string;
    /** The visibility of the repository (public or private). */
    visibility: string;
    /** A brief description of the repository. */
    description: string | null;
    /** The last update date in ISO format. */
    updated_at: string;
    /** The primary language of the repository, or null if not specified. */
    language: string | null;
    /** The HTML URL of the repository. */
    html_url: string;
  };
}

/**
 * Repository component displays information about a specific repository.
 *
 * @param {RepositoryProps} props - The properties for the Repository component.
 * @returns {JSX.Element} - The rendered Repository component.
 */
function Repository({ repository }: RepositoryProps) {

  const visibilityText = repository.visibility === "public" ? "Public" : "Private";

  /**
   * Formats the given date in "dd/mm/yyyy" format. 
   *
   * @param {string} updatedAt - The ISO date string to format.
   * @returns {string} - The formatted date string.
   */
  function getFormattedDate(updatedAt: string): string {
    const isoDate: string = updatedAt;
    const fullDate: Date = new Date(isoDate);
    const day: string = fullDate.getDate().toString().padStart(2, '0');
    const month: string = (fullDate.getMonth() + 1).toString().padStart(2, '0');
    const year: number = fullDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Format the "updated_at" date for display.
  const formattedUpdatedAt = getFormattedDate(repository.updated_at);

  return (
    <div className="repo-layout d-flex flex-column m-4 p-4" key={repository.id}>
      <div className="d-flex align-items-center pt-2 flex-wrap">
        <h2 className="repo-title">
          <a href={repository.html_url} target="_blank">{repository.name}</a>
        </h2>
        <span className="repo-visibility">
          {visibilityText}
        </span>
      </div>
      <p className="repo-description">{repository.description}</p>
      <div className="d-flex flex-wrap">
        <RepositoryLanguage language={repository.language} />
        <p className="repo-update">Updated at {formattedUpdatedAt}</p>
      </div>
    </div>
  );
}

export { Repository };