import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home/Home";
import { RecipeDetail } from "./pages/RecipeDetail/RecipeDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipedetail/:recipeId" element={<RecipeDetail />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
