import { FiX, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";
import { useCart } from "../../context/CartContext";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    increment,
    decrement,
    removeItem,
    totalPrice,
  } = useCart();

  function handleFinalize() {
    toast.success("سفارش شما با موفقیت ثبت شد! (نسخه دمو)");
    closeCart();
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`cart-drawer__overlay ${
          isOpen ? "cart-drawer__overlay--open" : "cart-drawer__overlay--closed"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`cart-drawer ${
          isOpen ? "cart-drawer--open" : "cart-drawer--closed"
        }`}
      >
        {/* Header */}
        <div className="cart-drawer__header">
          <div className="cart-drawer__restaurant">
            <img
              src="/images/imgRes.png"
              alt="رستوران"
              className="cart-drawer__restaurant-image"
            />

            <div className="cart-drawer__restaurant-info">
              <h5 className="cart-drawer__restaurant-name">رستوران آتیلا</h5>

              <span className="cart-drawer__menu-link">مشاهده منو</span>
            </div>
          </div>

          <button
            onClick={closeCart}
            className="btn-icon"
            aria-label="بستن سبد خرید"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="cart-drawer__divider" />

        {/* Cart Items */}
        <div className="cart-drawer__items">
          {items.length === 0 ? (
            <p className="cart-drawer__empty">سفارشی وجود ندارد.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-drawer__item">
                {/* Item Info */}
                <div className="cart-drawer__item-info">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-drawer__item-image"
                  />

                  <div className="cart-drawer__item-details">
                    <h4 dir="ltr" className="cart-drawer__item-name">
                      {item.name}
                    </h4>

                    <p dir="ltr" className="cart-drawer__item-price">
                      {item.price} دلار
                    </p>
                  </div>
                </div>

                {/* Item Actions */}
                <div className="cart-drawer__item-actions">
                  <div className="cart-drawer__quantity">
                    <button
                      onClick={() => increment(item.id)}
                      className="btn-icon-sm"
                      aria-label="افزایش تعداد"
                    >
                      <FiPlus size={14} />
                    </button>

                    <span className="cart-drawer__quantity-value">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => decrement(item.id)}
                      className="btn-icon-sm"
                      aria-label="کاهش تعداد"
                    >
                      <FiMinus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="btn-icon-danger"
                    aria-label="حذف از سبد"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-drawer__divider" />

        {/* Total */}
        <div className="cart-drawer__total">
          <p className="cart-drawer__total-label">هزینه کل:</p>

          <h4 className="cart-drawer__total-price">{totalPrice} دلار</h4>
        </div>

        <div className="cart-drawer__divider" />

        {/* Footer */}
        <div className="cart-drawer__footer">
          <button
            onClick={handleFinalize}
            disabled={items.length === 0}
            className="btn btn-primary btn-lg btn-block"
          >
            نهایی کردن سفارش
          </button>
        </div>
      </aside>
    </>
  );
}
