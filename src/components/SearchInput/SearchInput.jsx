import { useState } from "react";
import { debouncer } from "../../utilities/miscUtilities";
import "./SearchInput.css";

export default function SearchInput() {
  const [searchInput, setSearchInput] = useState("");

  const debouncedSetSearchInput = debouncer(setSearchInput, 500);

  const handleSearchInput = (e) => {
    debouncedSetSearchInput(e.target.value);
  };

  return (
    <article>
      <input
        className="search-bar"
        type="search"
        id="search-recipes"
        placeholder="Search by title/ingredients"
        onChange={(e) => handleSearchInput(e)}
      />
    </article>
  );
}
