import MealCard from "./MealCard";

export default function MealsGrid({ meals, emptyText = "غذایی پیدا نشد." }) {
  if (!meals || meals.length === 0) {
    return <p className="text-muted py-6">{emptyText}</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 w-[90%] mx-auto">
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
}
