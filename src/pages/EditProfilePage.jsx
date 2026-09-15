
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AppShell from "../ui/AppShell";

export default function EditProfilePage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "ali@example.com",
    phone: "",
    birthdate: "",
    gender: "",
    nationalId: "",
    address: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    toast.success("اطلاعات با موفقیت ذخیره شد (نسخه دمو)");
  }

  const fullName =
    `${form.firstName} ${form.lastName}`.trim() || "کاربر جدید";

  const initial = form.firstName ? form.firstName[0] : "A";

  return (
    <AppShell showCountrySelect={false}>
      <div className="edit-profile">
        <main className="edit-profile__card">
          {/* بنر برند + هویت کاربر */}
          <div className="edit-profile__banner">
            <div className="edit-profile__banner-decoration edit-profile__banner-decoration--top" />

            <div className="edit-profile__banner-decoration edit-profile__banner-decoration--bottom" />

            {/* آواتار */}
            <div className="edit-profile__avatar">
              <span className="edit-profile__avatar-initial">
                {initial}
              </span>

              <span className="edit-profile__avatar-camera">
                <CameraIcon />
              </span>
            </div>

            {/* نام و ایمیل */}
            <div className="edit-profile__identity">
              <p className="edit-profile__name">{fullName}</p>

              <p className="edit-profile__email">{form.email}</p>
            </div>
          </div>

          {/* Header */}
          <div className="edit-profile__header">
            <span className="edit-profile__badge">ویرایش اطلاعات</span>

            <h1 className="edit-profile__title">اطلاعات کاربری شما</h1>

            <p className="edit-profile__description">
              مشخصات خود را بررسی و به‌روز کنید
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="edit-profile__form">
            {/* اطلاعات اصلی */}
            <section className="edit-profile__section">
              <SectionTitle icon={<UserIcon />} text="مشخصات اصلی" />

              <div className="edit-profile__fields edit-profile__fields--three">
                <Field
                  label="نام"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="علی"
                  required
                />

                <Field
                  label="نام خانوادگی"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="فراشیانی"
                  required
                />

                <Field
                  label="نام کاربری"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="alifara"
                  maxLength={8}
                  required
                />
              </div>

              <div className="edit-profile__fields edit-profile__fields--two">
                <Field
                  label="ایمیل"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  readOnly
                />

                <Field
                  label="شماره موبایل"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="09xxxxxxxxx"
                  required
                />
              </div>
            </section>

            {/* جزئیات بیشتر */}
            <section className="edit-profile__section">
              <SectionTitle icon={<IdIcon />} text="جزئیات بیشتر" />

              <div className="edit-profile__fields edit-profile__fields--three">
                <Field
                  label="تاریخ تولد"
                  name="birthdate"
                  type="date"
                  value={form.birthdate}
                  onChange={handleChange}
                  required
                />

                <div className="edit-profile__field">
                  <label className="edit-profile__label" htmlFor="gender">
                    جنسیت
                  </label>

                  <select
                    id="gender"
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    required
                    className="edit-profile__select"
                  >
                    <option value="">انتخاب کنید…</option>
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
                    <option value="other">غیره</option>
                  </select>
                </div>

                <Field
                  label="کد ملی"
                  name="nationalId"
                  value={form.nationalId}
                  onChange={handleChange}
                  placeholder="—"
                  required
                />
              </div>

              <div className="edit-profile__field">
                <label className="edit-profile__label" htmlFor="address">
                  آدرس
                </label>

                <textarea
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="تهران، ..."
                  required
                  className="edit-profile__textarea"
                />
              </div>
            </section>

            {/* Buttons */}
            <div className="edit-profile__actions">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="btn btn-outline btn-lg"
              >
                انصراف
              </button>

              <button type="submit" className="btn btn-primary btn-lg">
                ذخیره تغییرات
              </button>
            </div>
          </form>
        </main>
      </div>
    </AppShell>
  );
}

function SectionTitle({ icon, text }) {
  return (
    <div className="edit-profile__section-title">
      <span className="edit-profile__section-icon">{icon}</span>

      <h2 className="edit-profile__section-heading">{text}</h2>
    </div>
  );
}

function Field({ label, name, type = "text", ...props }) {
  return (
    <div className="edit-profile__field">
      <label className="edit-profile__label" htmlFor={name}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        {...props}
        className="edit-profile__input"
      />
    </div>
  );
}

function UserIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.8-4 5-6 8-6s6.2 2 8 6" />
    </svg>
  );
}

function IdIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="12" r="1.8" />
      <path d="M13 10h5M13 14h5" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 8h3l2-2h6l2 2h3v11H4z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}

