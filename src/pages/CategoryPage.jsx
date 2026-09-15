import { useParams, Link } from "react-router-dom";
import AppShell from "../ui/AppShell";
import MealsGrid from "../features/meals/MealsGrid";
import { useMealsByIngredient } from "../hooks/useMeals";

export default function CategoryPage() {
  const { ingredient } = useParams();
  const { data: meals = [], isLoading } = useMealsByIngredient(ingredient);

  return (
    <AppShell showCountrySelect={false}>
      <div className="flex flex-col items-center py-10 gap-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">دسته: {ingredient}</h2>
          <Link to="/" className="btn btn-outline btn-sm">
            بازگشت به صفحه اصلی
          </Link>
        </div>
        {isLoading ? (
          <p className="text-muted">در حال بارگذاری...</p>
        ) : (
          <MealsGrid meals={meals} />
        )}
      </div>
    </AppShell>
  );
}
