export function recipesReducer(state, action) {
  switch (action.type) {
    case "set-recipes":
      return [...action.payload];
    case "delete-recipe":
      return [...state.filter(({ id }) => id !== action.payload)];
    case "add-recipe":
      return [...state, action.payload];
    case "edit-recipe": {
      const idToEdit = action.payload.id;
      const editedRecipe = action.payload.editedRecipe;
      return state.map((recipe) =>
        recipe.id === idToEdit ? editedRecipe : recipe
      );
    }
    default:
      return state;
  }
}
