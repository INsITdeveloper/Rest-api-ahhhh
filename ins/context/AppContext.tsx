import { createContext, useContext, useState, ReactNode } from 'react';

interface AnalysisResult {
  hasil: string;
  keyakinan: string;
}

interface AppContextType {
  isLoading: boolean;
  result: AnalysisResult | null;
  error: string | null;
  analyzeContent: (url: string, type: string) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeContent = async (url: string, type: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/ckporn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl: url }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze content');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ isLoading, result, error, analyzeContent }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
