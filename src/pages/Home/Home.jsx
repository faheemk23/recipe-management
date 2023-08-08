import { useContext, useState } from "react";

import { Loader } from "../../components/Loader/Loader";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
import { RecipeInput } from "../../components/RecipeInput/RecipeInput";
import SearchInput from "../../components/SearchInput/SearchInput";
import { RecipesContext } from "../../contexts/RecipesContext";
import "./Home.css";

export function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [showRecipeInput, setShowRecipeInput] = useState(false);

  const { recipesState, loading } = useContext(RecipesContext);

  let filteredRecipes = recipesState;

  const match = (strToSearchIn, strToSearch) =>
    strToSearchIn.toLowerCase().includes(strToSearch.toLowerCase());

  if (searchInput !== "") {
    filteredRecipes = filteredRecipes.filter(
      ({ title, ingredients }) =>
        match(title, searchInput) ||
        ingredients.some((ingredient) => match(ingredient, searchInput))
    );
  }

  return (
    <div className="home-page">
      <SearchInput setSearchInput={setSearchInput} />
      <h2>All Recipes :</h2>

      {loading && <Loader />}
      {!loading && (
        <>
          {filteredRecipes.length === 0 && (
            <h3>
              {searchInput === ""
                ? "No recipes to show. Please add some recipes!"
                : "Sorry, no recipes found !"}
            </h3>
          )}
          <section className="recipes-container">
            {filteredRecipes?.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            <div className="add-recipe-icon">
              <i
                className="fa-solid fa-circle-plus pointer"
                onClick={() => setShowRecipeInput(true)}
              ></i>
            </div>
          </section>
          {showRecipeInput && (
            <RecipeInput setShowRecipeInput={setShowRecipeInput} />
          )}
        </>
      )}
    </div>
  );
}
