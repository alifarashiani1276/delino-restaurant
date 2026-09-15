import { useQuery } from "@tanstack/react-query";
import {
  fetchAllMeals,
  fetchMealsByCountry,
  fetchMealsByIngredient,
  searchMealsByName,
} from "../services/mealsApi";

// همه‌ی غذاها (وقتی کشوری انتخاب نشده)
export function useAllMeals(enabled = true) {
  return useQuery({
    queryKey: ["meals", "all"],
    queryFn: fetchAllMeals,
    enabled,
  });
}

// غذاها بر اساس کشور
export function useMealsByCountry(country) {
  return useQuery({
    queryKey: ["meals", "country", country],
    queryFn: () => fetchMealsByCountry(country),
    enabled: Boolean(country),
  });
}

// غذاها بر اساس دسته/ماده اولیه (صفحه‌ی دسته‌بندی)
export function useMealsByIngredient(ingredient) {
  return useQuery({
    queryKey: ["meals", "ingredient", ingredient],
    queryFn: () => fetchMealsByIngredient(ingredient),
    enabled: Boolean(ingredient),
  });
}

// جستجوی غذا بر اساس نام
export function useSearchMeals(term) {
  return useQuery({
    queryKey: ["meals", "search", term],
    queryFn: () => searchMealsByName(term),
    enabled: Boolean(term),
  });
}
