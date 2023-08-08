import { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { RecipesContext } from "../../contexts/RecipesContext";

import {
  joinIngredientsAndInstructions,
  splitIngredientsAndInstructions,
  validateFields,
} from "../../utilities/miscUtilities";
import "./RecipeInput.css";

export function RecipeInput({
  setShowRecipeInput,
  setShowEditRecipeModal,
  recipe,
  inEdit,
}) {
  const { recipesDispatch } = useContext(RecipesContext);

  const [userInput, setUserInput] = useState({
    id: uuid(),
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const { id, title, description, ingredients, instructions, image } =
    userInput;

  const handleInputFields = (e) => {
    const field = e.target.id;
    setUserInput((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleBtnSave = (e) => {
    if (validateFields(userInput)) {
      recipesDispatch({
        type: "add-recipe",
        payload: splitIngredientsAndInstructions(userInput),
      });
    }
  };

  const handleBtnEdit = (e) => {
    if (validateFields(userInput)) {
      recipesDispatch({
        type: "edit-recipe",
        payload: {
          id: recipe.id,
          editedRecipe: splitIngredientsAndInstructions(userInput),
        },
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inEdit) {
      handleBtnEdit();
      setShowEditRecipeModal(false);
    } else {
      handleBtnSave();
      setShowRecipeInput(false);
    }
  };

  useEffect(() => {
    if (inEdit) {
      setUserInput(joinIngredientsAndInstructions(recipe));
    }
  }, []);

  return (
    <div className="modal-container">
      <form className="recipe-input" onSubmit={handleFormSubmit}>
        <label htmlFor="name">Title</label>
        <input
          type="text"
          value={title}
          id="title"
          onChange={handleInputFields}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          id="description"
          onChange={handleInputFields}
        />
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          name="ingredients"
          value={ingredients}
          id="ingredients"
          cols="50"
          rows="5"
          onChange={handleInputFields}
        ></textarea>
        <div>Note: Please provide one ingredient on each line</div>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          value={instructions}
          cols="50"
          rows="5"
          onChange={handleInputFields}
        ></textarea>
        <div>Note: Please provide one instruction on each line</div>{" "}
        <label htmlFor="image">
          {inEdit && image ? "Update" : "Upload"} Image (optional){" "}
        </label>
        <input type="file" id="upload-image" />
        <input
          type="submit"
          className="pointer"
          value={inEdit ? "Edit" : "Save"}
        />
        <span className="recipe-input-close-icon">
          <i
            className="fa-solid fa-circle-xmark pointer"
            onClick={() => {
              inEdit
                ? setShowEditRecipeModal(false)
                : setShowRecipeInput(false);
            }}
          ></i>
        </span>
      </form>
    </div>
  );
}
