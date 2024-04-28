import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./index.css";
import Container from "./components/container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("656329");

  return (
    <div className="App bg-gray-800">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList
            foodData={foodData}
            setFoodData={setFoodData}
            setFoodID={setFoodID}
          />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
