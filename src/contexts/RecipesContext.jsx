import { createContext, useEffect, useReducer, useState } from "react";

import { recipesReducer } from "../reducers/recipesReducer";
import { fetchRecipes } from "../utilities/recipeUtilities";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipesState, recipesDispatch] = useReducer(recipesReducer, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recipesInLocalStorage = localStorage.getItem("recipes");
    if (recipesInLocalStorage) {
      recipesDispatch({
        type: "set-recipes",
        payload: JSON.parse(recipesInLocalStorage),
      });
      setTimeout(() => setLoading(false), 1000);
    } else {
      fetchRecipes(recipesDispatch, setLoading);
    }
  }, []);

  return (
    <RecipesContext.Provider value={{ recipesState, recipesDispatch, loading }}>
      {children}
    </RecipesContext.Provider>
  );
};
