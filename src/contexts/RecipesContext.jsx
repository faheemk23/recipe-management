import { createContext, useEffect, useReducer } from "react";

import { recipesReducer } from "../reducers/recipesReducer";
import { fetchRecipes } from "../utilities/recipeUtilities";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipesState, recipesDispatch] = useReducer(recipesReducer, []);

  useEffect(() => {
    fetchRecipes(recipesDispatch);
  }, []);

  return (
    <RecipesContext.Provider value={{ recipesState, recipesDispatch }}>
      {children}
    </RecipesContext.Provider>
  );
};
