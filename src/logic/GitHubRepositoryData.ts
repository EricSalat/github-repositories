/**
 * Interface representing GitHub repository data.
 *
 * @interface
 */
export interface GitHubRepositoryData {
  /**
   * The unique identifier of the repository.
   *
   * @type {number}
   */
  id: number;

  /**
   * The name of the repository.
   *
   * @type {string}
   */
  name: string;

  /**
   * The URL of the repository on GitHub.
   *
   * @type {string}
   */
  html_url: string;

  /**
   * A brief description of the repository.
   *
   * @type {string}
   */
  description: string;

  /**
   * Indicates whether the repository is private (true) or public (false).
   *
   * @type {boolean}
   */
  private: boolean;

  /**
   * The primary programming language used in the repository.
   *
   * @type {string}
   */
  language: string;

  /**
   * The date and time when the repository was last updated.
   *
   * @type {string}
   */
  updated_at: string;
}
