import { createContext } from 'react';

interface GitHubDataContextType {
  repositories: any[]; // Arreglar el tipaod más tarde
}

const GitHubDataContext = createContext<GitHubDataContextType>({ repositories: [] });

export default GitHubDataContext;
