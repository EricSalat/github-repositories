import { createContext } from 'react';

interface GitHubRepositoryData {
  id: number;
  name: string;
  html_url: string;
  description: string;
  private: boolean;
  language: string;
  updated_at: string;
  visibility: string;
}

interface GitHubDataContextType {
  repositories: GitHubRepositoryData[];
}

const GitHubDataContext = createContext<GitHubDataContextType>({ repositories: [] });

export { GitHubDataContext };
