import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { RecipesContext } from "../../contexts/RecipesContext";
import { RecipeInput } from "../RecipeInput/RecipeInput";
import "./RecipeCard.css";

export function RecipeCard({ recipe }) {
  const [showEditRecipeModal, setShowEditRecipeModal] = useState(false);
  const { id, title, description, image } = recipe ?? {};

  const { recipesDispatch } = useContext(RecipesContext);
  const handleBtnDelete = () => {
    recipesDispatch({ type: "delete-recipe", payload: recipe.id });
  };

  return (
    <article className="recipe-card">
      <img
        className="recipe-image"
        src={
          image
            ? image
            : "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1691516455/placeholder-rgb-color-icon-vector-32173552_vbbhay.jpg"
        }
        alt="recipe"
        height="220px"
        width="200px"
      />
      <h3 className="title">{title}</h3>
      <div className="description">
        <i> {description}.</i>
      </div>
      <div className="flex-space-between">
        <strong>Ingredients: </strong>

        <Link className="link" to={`/recipedetail/${id}`}>
          View Recipe <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div className="flex-space-between">
        <strong>Instructions: </strong>

        <Link className="link" to={`/recipedetail/${id}`}>
          View Recipe <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div className="top-right recipe-card-icons">
        <i
          className="fa-solid fa-pen pointer"
          onClick={() => setShowEditRecipeModal(true)}
        ></i>
        <i
          className="fa-regular fa-trash-can pointer"
          onClick={() => handleBtnDelete()}
        ></i>
      </div>
      {showEditRecipeModal && (
        <RecipeInput
          recipe={recipe}
          setShowEditRecipeModal={setShowEditRecipeModal}
          inEdit
        />
      )}
    </article>
  );
}
