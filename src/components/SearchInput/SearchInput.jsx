import { debouncer } from "../../utilities/miscUtilities";
import "./SearchInput.css";

export default function SearchInput({ setSearchInput }) {
  const debouncedSetSearchInput = debouncer(setSearchInput, 400);

  const handleSearchInput = (e) => {
    debouncedSetSearchInput(e.target.value);
  };

  return (
    <article>
      <input
        className="search-bar"
        type="search"
        id="search-recipes"
        placeholder="Search by title or ingredients"
        onChange={(e) => handleSearchInput(e)}
      />
    </article>
  );
}
