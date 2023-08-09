import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { RecipeDetail } from "./pages/RecipeDetail/RecipeDetail";

import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { RecipesContext } from "./contexts/RecipesContext";
import { Error } from "./pages/Error/Error";
import { Login } from "./pages/Login/Login";

function App() {
  const { loading, loggedIn } = useContext(RecipesContext);

  const navigate = useNavigate();
  // useEffect(()=>{
  //   const
  //   if(!loggedIn){
  //     navigate("/login")
  //   }
  // },[])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipedetail/:recipeId" element={<RecipeDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* {!loggedIn && <Login />} */}
      {!loading && <Toaster />}
    </div>
  );
}

export default App;
