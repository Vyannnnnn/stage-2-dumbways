import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import "../App.css";

interface SearchResult {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  isbn?: string[];
  edition_count?: number;
  [key: string]: unknown;
}

export function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (!debouncedSearchTerm.trim()) {
      setResults([]);
      setError("");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?title=${encodeURIComponent(
            debouncedSearchTerm,
          )}&limit=10`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch book data");
        }

        const data = await response.json();
        setResults(data.docs || []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch book data",
        );
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedSearchTerm]);

  return (
    <div className="search-container">
      <h1>📚 Search Books</h1>

      <input
        type="text"
        placeholder="Type book title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {loading && <p className="search-loading">🔄 Searching for books...</p>}

      {error && <p className="search-error">❌ Error: {error}</p>}

      {results.length > 0 && (
        <div className="search-results-container">
          <h2>Search Results ({results.length})</h2>
          <ul className="search-results-list">
            {results.map((result) => (
              <li key={result.key} className="search-result-item">
                <h3>{result.title}</h3>
                {result.author_name && (
                  <p className="search-result-author">
                    📝 Author: {result.author_name.join(", ")}
                  </p>
                )}
                {result.first_publish_year && (
                  <p className="search-result-year">
                    📅 Year: {result.first_publish_year}
                  </p>
                )}
                {result.edition_count && (
                  <p className="search-result-edition">
                    📖 Editions: {result.edition_count}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {debouncedSearchTerm && !loading && results.length === 0 && !error && (
        <p className="search-no-results">
          No books found with the title "{debouncedSearchTerm}"
        </p>
      )}
    </div>
  );
}
