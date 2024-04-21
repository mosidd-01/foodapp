import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_API_URL;
const API = import.meta.env.VITE_API_KEY;

export default function Search() {
  const [query, setQuery] = useState("pizza");
  //syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API}`);
      const data = await res.json();
      console.log(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
