import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

export function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="login-container">
      <img
        src="https://ik.imagekit.io/faheem/loginPage.jpg?updatedAt=1691537068281"
        alt="recipe"
      />
      <div>
        <h1>CulinaryChronicles: Your Recipe Management Partner</h1>
        <h3>Simplified Recipe Creation: </h3>
        <div>Easy forms for recipes, images, and instructions.</div>
        <h3>Efficient Search & Filters:</h3>
        <div>Quick recipe discovery with advanced filters.</div>
        <h3>Secure Authentication & Access:</h3>
        <div>Strong user authentication and role control.</div>
        <h3>Interactive Recipe Management:</h3>
        <div>Easy view, edit, and delete recipies</div>
        <button
          className="btn btn-primary login-btn"
          onClick={() => loginWithRedirect()}
        >
          Log in
        </button>
      </div>
    </div>
  );
}
