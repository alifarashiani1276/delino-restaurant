import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit() {
    if (query.trim()) onSearch(query.trim());
  }

  return (
    <div className="search-bar">
      <div className="search-bar__input-wrapper">
        <img
          src="/images/inputSearch.svg"
          alt=""
          className="search-bar__icon"
        />

        <input
          type="search"
          value={query}
          placeholder="جستجو براساس نام غذا..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="search-bar__input"
        />
      </div>

      <button onClick={handleSubmit} className="btn btn-primary">
        جستجوکن
      </button>
    </div>
  );
}