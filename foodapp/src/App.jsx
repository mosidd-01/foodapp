import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./index.css";
import Container from "./components/container";
import InnerContainer from "./components/InnerContainer";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App bg-gray-800">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container className="flex">
        <InnerContainer className="bg-white">
          <FoodList foodData={foodData} setFoodData={setFoodData} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
