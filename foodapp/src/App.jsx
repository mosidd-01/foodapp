import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";

function App() {
  const [foodData, setFoodData] = useState([]);
  if (foodData.length == 0) {
    setFoodData([1]);
    //console.log("asdas");
  }
  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} setFoodData={setFoodData} />
      {/* {foodData.title} */}
      {/* {foodData.map((food) => (
        <h1>{food.title}</h1>
      ))} */}
    </div>
  );
}

export default App;
