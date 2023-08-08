export function recipesReducer(state, action) {
  switch (action.type) {
    case "set-recipes": {
      const newState = [...action.payload];
      localStorage.setItem("recipes", JSON.stringify(newState));
      return newState;
    }
    case "delete-recipe": {
      const newState = [...state.filter(({ id }) => id !== action.payload)];
      localStorage.setItem("recipes", JSON.stringify(newState));
      return newState;
    }
    case "add-recipe": {
      const newState = [...state, action.payload];
      localStorage.setItem("recipes", JSON.stringify(newState));
      return newState;
    }
    case "edit-recipe": {
      const idToEdit = action.payload.id;
      const editedRecipe = action.payload.editedRecipe;
      const newState = state.map((recipe) =>
        recipe.id === idToEdit ? editedRecipe : recipe
      );
      localStorage.setItem("recipes", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
}
