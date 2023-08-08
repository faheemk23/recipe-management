import { ColorRing } from "react-loader-spinner";

import "./Loader.css";

export function Loader() {
  return (
    <div className="loader-container">
      {" "}
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#ee4e5e", "#ffffff", "#ee4e5e", "#ffffff", "#ee4e5e"]}
      />
    </div>
  );
}
