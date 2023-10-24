import { Octokit } from "octokit";
// require('dotenv').config();

/**
 * Fetches repository data for a GitHub user.
 *
 * @param {string} username - The GitHub username for which to fetch repositories.
 * @returns {Promise<Array>} A promise that resolves to an array of repository data.
 * @throws {Error} Throws an error if there is an issue with the API call.
 */
export async function fetchDataFromGitHub(username: string) {
  /**
   * @type {string}
   * The GitHub API token. It is retrieved from the environment variables.
   */
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
  import.meta.env.VITE_GITHUB_TOKEN;
  /**
   * Initialize an Octokit instance with the provided GitHub token.
   *
   * @type {Octokit}
   */
  const octokit = new Octokit({ auth: githubToken });

  try {
    /**
     * Send a GET request to the GitHub API to fetch repositories for the given username.
     *
     * @type {import("octokit-types").OctokitResponse<any>}
     */
    const response = await octokit.request('GET /users/{username}/repos', {
      username,
    });

    return response.data; // Returns the data as-is

  } catch (error) {
    /**
     * Handle and log any errors that occur during the API call.
     *
     * @type {Error}
     */
    console.error("Error when making the API call:", error);
    throw error;
  }
}
