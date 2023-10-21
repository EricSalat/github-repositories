import { createContext } from 'react';
// import { GitHubRepositoryData } from "../logic/GitHubRepositoryData.ts"; 

interface GitHubRepositoryData {
    id: number;
    name: string;
    html_url: string;
    description: string;
    private: boolean;
    language: string;
    updated_at: string;
  }

interface GitHubDataContextType {
  repositories: any[]; // Arreglar el tipado más tarde
}

const GitHubDataContext = createContext<GitHubDataContextType>({ repositories: [] });

export default GitHubDataContext;
