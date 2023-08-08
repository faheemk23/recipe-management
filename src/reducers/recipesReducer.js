export function recipesReducer(state, action) {
  switch (action.type) {
    case "set-recipes":
      return [...action.payload];
    case "delete-recipe":
      return [...state.filter(({ id }) => id !== action.payload)];
    default:
      return state;
  }
}
