import { useState } from "react";
import { useEffect } from "react";

export default function FoodDetails({ foodID }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodID]);
  return (
    <div className="text-slate-400 w-[600px] my-5 mx-auto px-5 py-5 rounded-lg shadow-md shadow-slate-500">
      <div>
        <h1 className="text-2xl mb-2.5 font-bold">{food.title}</h1>
        <img className="max-w-full h-auto mb-2.5 rounded-lg" src={food.image} />
        <div className="mb-5 flex justify-between items-center">
          <span>
            <strong>⌚️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>🧑‍🧑‍🧒 Serves: {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>${food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2 className="text-2xl font-bold mt-5">Instructions</h2>
        <div className="p-5 rounded-md ">
          <ol className="ml-0 ">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((steps) => (
                <li className="my-2.5 mx-0 list-decimal">{steps.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
