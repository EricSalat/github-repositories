import { createContext } from 'react';

/**
 * Interface representing data for a GitHub repository.
 */
interface GitHubRepositoryData {
  /**
   * The unique identifier of the repository.
   */
  id: number;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The URL of the repository.
   */
  html_url: string;
  /**
   * A brief description of the repository.
   */
  description: string | null;
  /**
   * The main programming language of the repository.
   */
  language: string | null;
  /**
   * The last update date in ISO format.
   */
  updated_at: string;
  /**
   * The visibility of the repository (public or private).
   */
  visibility: string;
}

/**
 * Interface representing the data context for GitHub repositories.
 */
interface GitHubDataContextType {
  repositories: GitHubRepositoryData[];
}

/**
 * Context for managing data related to GitHub repositories.
 */
const GitHubDataContext = createContext<GitHubDataContextType>({ repositories: [] });

export { GitHubDataContext };
