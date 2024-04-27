import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./index.css";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App bg-gray-800">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} setFoodData={setFoodData} />
    </div>
  );
}

export default App;
