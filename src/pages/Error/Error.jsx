import React from "react";
import { NavLink } from "react-router-dom";

export function Error() {
  return (
    <div>
      <h1>Sorry something went wrong!</h1>
      <NavLink to="/">Go back to homepage</NavLink>
    </div>
  );
}
