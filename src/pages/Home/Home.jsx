import { useContext } from "react";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
import SearchInput from "../../components/SearchInput/SearchInput";
import { RecipesContext } from "../../contexts/RecipesContext";
import "./Home.css";

export function Home() {
  const { recipesState } = useContext(RecipesContext);

  return (
    <div>
      Home
      <SearchInput />
      <section className="recipes-container">
        {recipesState?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
        <div className="add-recipe-icon">
          <i
            className="fa-solid fa-circle-plus pointer"
            // onClick={() => setShowRecipeInput(true)}
          ></i>
        </div>
      </section>
    </div>
  );
}
