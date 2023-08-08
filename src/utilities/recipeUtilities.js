import { fakeFetch } from "../data/data";

export const fetchRecipes = async (recipesDispatch) => {
  try {
    const res = await fakeFetch("https://example.com/api/recipes");
    if (res.status === 200) {
      recipesDispatch({ type: "set-recipes", payload: res.data });
    }
  } catch (e) {
    console.error(e);
  }
};
