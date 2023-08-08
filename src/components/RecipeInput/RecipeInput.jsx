import { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { RecipesContext } from "../../contexts/RecipesContext";

import { toast } from "react-hot-toast";
import {
  joinIngredientsAndInstructions,
  splitIngredientsAndInstructions,
  uploadImage,
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
  const [imageFile, setImageFile] = useState(null);

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

  const handleImageInput = (e) => {
    if (e.target.files[0].size > 5000000) {
      toast.error("Image size should be less than 5MB");
    } else {
      setImageFile(e.target.files[0]);
    }
  };

  const handleBtnSave = async (e) => {
    if (validateFields(userInput)) {
      if (imageFile) {
        try {
          toast("Uploading image!");
          const res = await uploadImage(imageFile);
          recipesDispatch({
            type: "add-recipe",
            payload: splitIngredientsAndInstructions({
              ...userInput,
              image: res.secure_url,
            }),
          });
          toast.success("Image uploaded successfully!");
        } catch (e) {
          console.error(e.message);
          toast.error("Image upload failed!");
        }
      } else {
        recipesDispatch({
          type: "add-recipe",
          payload: splitIngredientsAndInstructions(userInput),
        });
      }
    }
  };

  const handleBtnEdit = async (e) => {
    if (validateFields(userInput)) {
      if (imageFile) {
        try {
          toast("Uploading image!");
          const res = await uploadImage(imageFile);
          recipesDispatch({
            type: "edit-recipe",
            payload: {
              id: recipe.id,
              editedRecipe: splitIngredientsAndInstructions({
                ...userInput,
                image: res.secure_url,
              }),
            },
          });
          toast.success("Image uploaded successfully!");
        } catch (e) {
          console.error(e.message);
          toast.error("Image upload failed!");
        }
      } else {
        recipesDispatch({
          type: "edit-recipe",
          payload: {
            id: recipe.id,
            editedRecipe: splitIngredientsAndInstructions(userInput),
          },
        });
      }
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
        <h2 className="heading">{inEdit ? "Edit recipe" : "Add recipe"}</h2>
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
        <div>Note: Press Enter after typing each ingredient.</div>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          value={instructions}
          cols="50"
          rows="5"
          onChange={handleInputFields}
        ></textarea>
        <div>Note: Press Enter after typing each instruction.</div>{" "}
        <label htmlFor="image">
          {inEdit && image ? "Update" : "Upload"} Image (optional){" "}
        </label>
        <input
          type="file"
          accept="image/*"
          id="upload-image"
          onChange={handleImageInput}
        />
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
