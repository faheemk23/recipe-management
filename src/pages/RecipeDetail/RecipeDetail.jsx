import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { RecipeDetailCard } from "../../components/RecipeDetailCard/RecipeDetailCard";
import { RecipesContext } from "../../contexts/RecipesContext";
import "./RecipeDetail.css";

export function RecipeDetail() {
  const { recipeId } = useParams();

  const { recipesState, loading } = useContext(RecipesContext);

  const recipe = recipesState?.find(({ id }) => id === recipeId);

  return (
    <div>
      <Link className="recipe-detail-link" to="/">
        <i class="fa-solid fa-arrow-left-long"></i> Go Back
      </Link>
      {loading ? <Loader /> : <RecipeDetailCard recipe={recipe} />}
    </div>
  );
}
