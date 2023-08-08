import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuid } from "uuid";

import { RecipesContext } from "../../contexts/RecipesContext";

import "./RecipeInput.css";

export function RecipeInput({ setShowRecipeInput }) {
  const [errorMessage, setErrorMessage] = useState("");
  const { recipesState, recipesDispatch } = useContext(RecipesContext);

  const [userInput, setUserInput] = useState({
    id: uuid(),
    name: "",
    ingredients: "",
    instructions: "",
    cuisine: "",
    image: "https://source.unsplash.com/random/400x400/?food",
  });

  const handleInputFields = (e) => {
    const field = e.target.id;
    setUserInput((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validateFields = (userInput) => {
    const fields = Object.keys(userInput);
    return !fields.some((fieldToCheck) =>
      fieldToCheck === "image" ? false : userInput[fieldToCheck].trim() === ""
    );
  };

  const properFormat = (userInput) => ({
    ...userInput,
    ingredients: userInput.ingredients.split("\n"),
    instructions: userInput.instructions.split("\n"),
  });

  const handleBtnSave = (e) => {
    setErrorMessage("");
    if (validateFields(userInput)) {
      //   setRecipesData((prev) => [...prev, properFormat(userInput)]);
      //   setShowRecipeInput(false);
    } else {
      toast.error("Please provide all the fields");
    }
  };

  console.log(userInput);

  return (
    <div className="modal-container">
      <div className="recipe-input">
        {errorMessage && <div>{errorMessage}</div>}
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleInputFields} />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleInputFields}
        />
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          name="ingredients"
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
          cols="50"
          rows="5"
          onChange={handleInputFields}
        ></textarea>
        <div>Note: Please provide one instruction on each line</div>{" "}
        {/* <label htmlFor="image">Image Link</label>
        <input
          defaultValue="https://source.unsplash.com/random/400x400/?food"
          type="text"
          id="image"
          onChange={handleInputFields}
        /> */}
        <label htmlFor="image">Upload Image (optional) </label>
        <input type="file" id="upload-image" />
        <button className="pointer" onClick={handleBtnSave}>
          Save
        </button>
        <span className="recipe-input-close-icon">
          <i
            className="fa-solid fa-circle-xmark pointer"
            onClick={() => setShowRecipeInput(false)}
          ></i>
        </span>
      </div>
    </div>
  );
}
