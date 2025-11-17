import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'creator' | 'developer' | 'investor' | null;

export interface Idea {
  id: string;
  title: string;
  description: string;
  sdg: string;
  budget: number;
  creatorName: string;
}

interface AppContextType {
  currentUser: { name: string; email: string; role: UserRole } | null;
  setCurrentUser: (user: { name: string; email: string; role: UserRole } | null) => void;
  ideas: Idea[];
  addIdea: (idea: Omit<Idea, 'id'>) => void;
  developerInterests: string[];
  addDeveloperInterest: (ideaId: string) => void;
  investorInterests: string[];
  addInvestorInterest: (ideaId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; role: UserRole } | null>(null);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [developerInterests, setDeveloperInterests] = useState<string[]>([]);
  const [investorInterests, setInvestorInterests] = useState<string[]>([]);

  const addIdea = (idea: Omit<Idea, 'id'>) => {
    const newIdea = { ...idea, id: Date.now().toString() };
    setIdeas([...ideas, newIdea]);
  };

  const addDeveloperInterest = (ideaId: string) => {
    if (!developerInterests.includes(ideaId)) {
      setDeveloperInterests([...developerInterests, ideaId]);
    }
  };

  const addInvestorInterest = (ideaId: string) => {
    if (!investorInterests.includes(ideaId)) {
      setInvestorInterests([...investorInterests, ideaId]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        ideas,
        addIdea,
        developerInterests,
        addDeveloperInterest,
        investorInterests,
        addInvestorInterest,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
