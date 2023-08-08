import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { RecipeDetailCard } from "../../components/RecipeDetailCard/RecipeDetailCard";
import { RecipesContext } from "../../contexts/RecipesContext";
import "./RecipeDetail.css";

export function RecipeDetail() {
  const { recipeId } = useParams();

  const { recipesState } = useContext(RecipesContext);

  const recipe = recipesState?.find(({ id }) => id === recipeId);

  return (
    <div>
      <Link className="recipe-detail-left-arrow" to="/">
        <i class="fa-solid fa-arrow-left-long"></i>
      </Link>
      <RecipeDetailCard recipe={recipe} />
    </div>
  );
}
