import { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipesContext } from "../../contexts/RecipesContext";

import "./RecipeCard.css";

export function RecipeCard({ recipe }) {
  const { id, name, description, image } = recipe;

  const { recipesDispatch } = useContext(RecipesContext);
  const handleBtnDelete = () => {
    recipesDispatch({ type: "delete-recipe", payload: recipe.id });
  };

  return (
    <article className="recipe-card">
      <img
        className="recipe-image"
        src={image}
        alt="recipe"
        height="220px"
        width="200px"
      />
      <h3>{name}</h3>
      <div>
        <i> {description}.</i>
      </div>
      <div>
        <strong>Ingredients: </strong>

        <Link className="link" to={`/detail/${id}`}>
          View Recipe <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div>
        <strong>Instructions: </strong>

        <Link className="link" to={`/detail/${id}`}>
          View Recipe <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div className="top-right recipe-card-icons">
        <i className="fa-solid fa-pen pointer"></i>
        <i
          className="fa-regular fa-trash-can pointer"
          onClick={() => handleBtnDelete()}
        ></i>
      </div>
    </article>
  );
}
