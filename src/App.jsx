import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { RecipeDetail } from "./pages/RecipeDetail/RecipeDetail";

import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Loader } from "./components/Loader/Loader";
import { NavBar } from "./components/NavBar/NavBar";
import { RecipesContext } from "./contexts/RecipesContext";
import { Error } from "./pages/Error/Error";
import { Login } from "./pages/Login/Login";

function App() {
  const { loading } = useContext(RecipesContext);
  const { isLoading, isAuthenticated, error } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated && (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipedetail/:recipeId" element={<RecipeDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
      {error && <Error />}
      {isLoading && (
        <div className="center-of-app">
          {" "}
          <Loader />
        </div>
      )}

      {!isAuthenticated && !isLoading && <Login />}
      {!loading && <Toaster />}
    </div>
  );
}

export default App;
