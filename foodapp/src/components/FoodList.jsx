import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodData }) {
  return (
    <div className="bg-gray-800">
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
