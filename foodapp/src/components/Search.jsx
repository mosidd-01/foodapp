import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_API_URL;
const API = import.meta.env.VITE_API_KEY;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  //syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API}`);
        const data = await res.json();
        //const data = await res;
        console.log(typeof data.results);
        console.log(data.results);
        console.log(setFoodData);
        setFoodData(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFood();
  }, [query]);
  return (
    <div className="bg-gray-800 my-5 mx-auto w-[300px] relative">
      <input
        className="bg-gray-600 text-base rounded-md text-slate-400 py-2.5 px-5 w-full outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
