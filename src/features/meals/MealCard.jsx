import toast from "react-hot-toast";
import { useCart } from "../../context/CartContext";

export default function MealCard({ meal }) {
  const { addItem } = useCart();

  function handleAdd() {
    addItem(meal);
    toast.success("به سبد خرید اضافه شد");
  }

  return (
    <div className="meal-card">
      <div className="meal-card__image-wrapper">
        <img
          src={meal.image}
          alt={meal.name}
          className="meal-card__image"
        />
      </div>

      <div className="meal-card__content">
        <h4 dir="ltr" className="meal-card__name">
          {meal.name}
        </h4>

        <p className="meal-card__price">{meal.price} دلار</p>

        <button
          onClick={handleAdd}
          className="btn btn-primary btn-sm meal-card__add-button"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}