import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { RecipesContext } from "../../contexts/RecipesContext";
import "./Auth.css";

export function Auth() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  const { setLoggedIn } = useContext(RecipesContext);
  const navigate = useNavigate();

  if (isLoading) {
    return <div></div>;
  }
  if (error) {
    console.log(error);
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    // setLoggedIn(true);
    navigate("/");
    return (
      <div>
        <span className="auth-name">
          Hello, <span className="bold">{user.name}</span>{" "}
        </span>

        <button
          className="btn btn-secondary"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log out
        </button>
      </div>
    );
  } else {
    // setLoggedIn(false);
    navigate("/login");
    return (
      <button className="btn btn-primary" onClick={() => loginWithRedirect()}>
        Log in
      </button>
    );
  }
}
