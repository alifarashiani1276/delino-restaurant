import { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import UserMenu from "./UserMenu";
import CountrySelect from "../../features/countrySelect/CountrySelect";
import ThemeToggle from "../ThemeToggle";

export default function Header({ onCountryChange, showCountrySelect = true }) {
  const { totalCount, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Main Header */}
      <div className="header__main">
        <button onClick={() => setMenuOpen(true)} className="btn btn-soft">
          <FiUser size={16} />
          <span className="hidden sm:inline">حساب کاربری</span>
        </button>

        {/* Logo */}
        <Link to="/" className="header__logo">
          <img
            src="/images/logo-delino-new.svg"
            alt="دلینو"
            className="header__logo-full"
          />

          <img
            src="/images/logo-delino-rispons.svg"
            alt="دلینو"
            className="header__logo-mobile"
          />
        </Link>

        {/* Actions */}
        <div className="header__actions">
          <ThemeToggle />

          <button
            onClick={openCart}
            className="btn btn-primary header__cart-button"
            aria-label="سبد خرید"
          >
            <FiShoppingCart size={18} />
            <span>{totalCount}</span>
          </button>
        </div>
      </div>

      {/* Country Select */}
      {showCountrySelect && (
        <div className="header__country">
          <img
            src="/images/locationSvg.svg"
            alt=""
            className="header__country-icon"
          />

          <CountrySelect onSelect={onCountryChange} />
        </div>
      )}

      {/* User Menu */}
      <UserMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
