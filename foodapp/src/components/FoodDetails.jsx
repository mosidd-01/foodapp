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
    <div className="text-slate-400">
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} />
        <div>
          <span>
            <strong>⌚️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>🧑‍🧑‍🧒 Serves: {food.servings}</strong>
          </span>
          <span>{food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}</span>
          <span>{food.vegan ? "🐮 Vegan" : ""}</span>
        </div>
        <div>
          <span>${food.pricePerServing / 100} Per Serving</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((steps) => (
            <li>{steps.step}</li>
          ))
        )}
      </div>
    </div>
  );
}
