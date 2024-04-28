import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodData, setFoodID }) {
  return (
    <>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodID={setFoodID} />
      ))}
    </>
  );
}
