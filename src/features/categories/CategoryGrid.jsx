import { Link } from "react-router-dom";
import { favoriteCategories } from "./categoriesData";

// دسته‌بندی‌هایی که در categoriesData.js فیلد "ingredient" ندارن، فعلاً صفحه‌ی
// اختصاصی خودشون آماده نیست؛ طبق درخواست، این‌ها با کلیک به صفحه‌ی
// "غذا های گوشتی" (ingredient: lamb) هدایت می‌شن. 
const FALLBACK_INGREDIENT = "lamb";

export default function CategoryGrid() {
  return (
    <div className="category-grid">
      {/* عنوان بخش */}
      <div className="category-grid__header">
        <h2 className="category-grid__title">دسته های محبوب</h2>
      </div>

      {/* دسته‌بندی‌ها */}
      <div className="category-grid__list">
        {favoriteCategories.map((cat) => {
          const content = (
            <div className="category-grid__card">
              <img
                src={cat.image}
                alt={cat.label}
                className="category-grid__image"
              />

              <div className="category-grid__overlay" />

              <p className="category-grid__label">{cat.label}</p>
            </div>
          );

          return (
            <Link
              key={cat.label}
              to={`/category/${cat.ingredient ?? FALLBACK_INGREDIENT}`}
              className="category-grid__link"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
