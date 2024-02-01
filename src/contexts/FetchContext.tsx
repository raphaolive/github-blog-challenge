import { ReactNode, createContext, useEffect, useState } from "react";
import { Blog, User } from "../types/user";
import axios from "axios";

interface FetchContextType {
  userData: User;
  issuesData: Blog[];
  loadIssuesData: (query?: string) => Promise<void>;
}

interface FetchContextProviderProps {
  children: ReactNode;
}

export const FetchContext = createContext({} as FetchContextType);

export const FetchContextProvider = ({
  children,
}: FetchContextProviderProps) => {
  const [userData, setUserData] = useState({} as User);
  const [issuesData, setIssuesData] = useState<Blog[]>([]);

  const loadIssuesData = async (query?: string) => {
    const searchTerm = query
      ? `${query} repo:raphaolive/github-blog-challenge`
      : "repo:raphaolive/github-blog-challenge";

    axios
      .get("https://api.github.com/search/issues", {
        params: {
          q: searchTerm,
        },
      })
      .then((response) => {
        setIssuesData(response.data.items);
      })
      .catch(() => console.log("Houve um erro ao carregar publicações"));
  };

  const loadProfileData = async () => {
    const response = await fetch("http://api.github.com/users/raphaolive");
    const data = await response.json();
    setUserData(data);
  };

  useEffect(() => {
    loadProfileData();
    loadIssuesData();
  }, []);

  return (
    <FetchContext.Provider value={{ userData, issuesData, loadIssuesData }}>
      {children}
    </FetchContext.Provider>
  );
};
