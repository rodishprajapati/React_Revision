// import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const term = searchParams.get("id") || "No search term provided";

  return (
    <div style={{ padding: 20 }}>
      <h1>Search Results</h1>
      <p>Search Term: {term}</p>
    </div>
  );
}

export default SearchPage;
