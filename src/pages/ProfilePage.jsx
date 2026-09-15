import { Link } from "react-router-dom";
import AppShell from "../ui/AppShell";

const mockUser = {
  name: "علی فراشیانی",
  email: "ali@example.com",
  joinedAt: "۱۴۰۳/۰۲/۱۵",
};

export default function ProfilePage() {
  const initial = mockUser.name.trim().charAt(0);

  return (
    <AppShell showCountrySelect={false}>
      <div className="profile-page">
        <main className="profile-page__card">
          {/* بنر برند + هویت کاربر */}
          <div className="profile-page__banner">
            <div className="profile-page__banner-decoration profile-page__banner-decoration--top" />

            <div className="profile-page__banner-decoration profile-page__banner-decoration--bottom" />

            {/* آواتار - سمت راست */}
            <div className="profile-page__avatar">
              <span className="profile-page__avatar-initial">{initial}</span>
            </div>

            {/* نام و ایمیل - سمت چپ */}
            <div className="profile-page__identity">
              <p className="profile-page__name">{mockUser.name}</p>

              <p className="profile-page__email">{mockUser.email}</p>
            </div>
          </div>

          {/* اطلاعات */}
          <div className="profile-page__info">
            <InfoRow
              icon={<UserIcon />}
              label="نام کاربر"
              value={mockUser.name}
            />

            <InfoRow icon={<MailIcon />} label="ایمیل" value={mockUser.email} />

            <InfoRow
              icon={<CalendarIcon />}
              label="تاریخ عضویت"
              value={mockUser.joinedAt}
            />
          </div>

          {/* دکمه ویرایش */}
          <div className="profile-page__actions">
            <Link
              to="/profile/edit"
              className="btn btn-primary btn-lg btn-block"
            >
              ویرایش اطلاعات
            </Link>
          </div>
        </main>
      </div>
    </AppShell>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="profile-page__info-row">
      <span className="profile-page__info-icon">{icon}</span>

      <div className="profile-page__info-content">
        <span className="profile-page__info-label">{label}</span>

        <span className="profile-page__info-value">{value}</span>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.8-4 5-6 8-6s6.2 2 8 6" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}
