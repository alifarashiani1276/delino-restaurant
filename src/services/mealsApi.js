const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

function getRandomPrice() {
  return Math.floor(Math.random() * 56) + 5; // بین ۵ تا ۶۰ دلار (نمایشی)
}

function mapMeal(meal) {
  return {
    id: meal.idMeal,
    name: meal.strMeal,
    image: meal.strMealThumb,
    price: getRandomPrice(),
  };
}

export async function fetchAllMeals() {
  const res = await fetch(`${BASE_URL}search.php?s=`);
  if (!res.ok) throw new Error(`خطای HTTP: ${res.status}`);
  const data = await res.json();
  return (data.meals || []).map(mapMeal);
}

export async function searchMealsByName(name) {
  const res = await fetch(
    `${BASE_URL}search.php?s=${encodeURIComponent(name)}`,
  );
  if (!res.ok) throw new Error(`خطای HTTP: ${res.status}`);
  const data = await res.json();
  return (data.meals || []).map(mapMeal);
}

export async function fetchMealsByCountry(country) {
  const res = await fetch(
    `${BASE_URL}filter.php?a=${encodeURIComponent(country)}`,
  );
  if (!res.ok) throw new Error(`خطای HTTP: ${res.status}`);
  const data = await res.json();
  return (data.meals || []).map(mapMeal);
}

export async function fetchMealsByIngredient(ingredient) {
  const res = await fetch(
    `${BASE_URL}filter.php?i=${encodeURIComponent(ingredient)}`,
  );
  if (!res.ok) throw new Error(`خطای HTTP: ${res.status}`);
  const data = await res.json();
  return (data.meals || []).map(mapMeal);
}
