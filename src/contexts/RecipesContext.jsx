import { createContext } from "react";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  return (
    <RecipesContext.Provider value={{ a: 1 }}>
      {children}
    </RecipesContext.Provider>
  );
};
