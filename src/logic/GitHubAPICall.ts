import { Octokit } from "octokit";

export async function fetchDataFromGitHub(username: string) {
  const octokit = new Octokit({ auth: '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' });

  try {
    const response = await octokit.request('GET /users/{username}/repos', {
      username,
    });

    return response.data; // Returns the data as-is

  } catch (error) {
    console.error("Error when making the API call:", error);
    throw error;
  }
}
