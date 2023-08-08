import { Auth } from "../Auth/Auth";
import "./NavBar.css";

export function NavBar() {
  return (
    <div className="nav-bar">
      <h1 className="app-main-heading">
        CulinaryChronicles: Your Recipe Oasis
      </h1>
      <Auth />
    </div>
  );
}
