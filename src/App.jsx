import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { RecipeDetail } from "./pages/RecipeDetail/RecipeDetail";

import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { RecipesContext } from "./contexts/RecipesContext";
import { Error } from "./pages/Error/Error";

function App() {
  const { loading } = useContext(RecipesContext);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipedetail/:recipeId" element={<RecipeDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {!loading && <Toaster />}
    </div>
  );
}

export default App;
