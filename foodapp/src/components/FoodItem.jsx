export default function FoodItem({ food, setFoodID }) {
  return (
    <div className="w-[300px] rounded-lg shadow-md shadow-slate-500 mx-5 my-5 overflow-hidden">
      <img src={food.image} className="max-w-full h-auto" alt="" />
      <div className="text-center text-slate-400 px-2.5 py-2.5">
        <p className="text-base font-semibold ">{food.title}</p>
      </div>
      <div className="mb-5 flex	justify-around text-center">
        <button
          onClick={() => {
            console.log(food.id);
            setFoodID(food.id);
          }}
          className="text-slate-200 rounded-md bg-indigo-500 shadow-lg shadow-indigo-500/50 border-none px-1.5 py-1.5 cursor-pointer"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
