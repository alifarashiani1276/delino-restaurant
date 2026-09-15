import { Link } from "react-router-dom";
import { FiX, FiUser, FiUserPlus, FiHome } from "react-icons/fi";

const menuItems = [
  {
    icon: FiHome,
    label: "صفحه اصلی",
    to: "/",
  },
  {
    icon: FiUser,
    label: "اطلاعات من",
    to: "/profile",
  },
  {
    icon: FiUserPlus,
    label: "دعوت از دوستان",
  },
];

export default function UserMenu({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`user-menu__overlay ${
          open ? "user-menu__overlay--open" : "user-menu__overlay--closed"
        }`}
      />

      {/* User Drawer */}
      <aside
        className={`user-menu ${
          open ? "user-menu--open" : "user-menu--closed"
        }`}
      >
        {/* User Header */}
        <div className="user-menu__header">
          <div className="user-menu__user">
            <img src="/user.jpg" alt="کاربر" className="user-menu__avatar" />

            <div className="user-menu__user-info">
              <p className="user-menu__user-name">کاربر مهمان</p>

              <span className="user-menu__credit">اعتبار: ۰ تومان</span>
            </div>
          </div>

          <button onClick={onClose} className="btn-icon" aria-label="بستن منو">
            <FiX size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="user-menu__list">
          {menuItems.map(({ icon: Icon, label, to }) => {
            const content = (
              <>
                <Icon size={18} />
                <span>{label}</span>
              </>
            );

            return (
              <li key={label} onClick={onClose} className="user-menu__item">
                {to ? (
                  <Link to={to} className="user-menu__link">
                    {content}
                  </Link>
                ) : (
                  <div className="user-menu__link">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
