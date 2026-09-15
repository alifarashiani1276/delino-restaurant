import { useState } from "react";
import AppShell from "../ui/AppShell";
import SearchBar from "../features/search/SearchBar";
import MealsGrid from "../features/meals/MealsGrid";
import CategoryGrid from "../features/categories/CategoryGrid";
import { useAllMeals, useMealsByCountry, useSearchMeals } from "../hooks/useMeals";

export default function HomePage() {
  const [country, setCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: allMeals = [], isLoading: isAllLoading } = useAllMeals(!country);
  const { data: countryMeals = [], isLoading: isCountryLoading } = useMealsByCountry(country);
  const { data: searchResults = [] } = useSearchMeals(searchTerm);

  const meals = country ? countryMeals : allMeals;
  const loading = country ? isCountryLoading : isAllLoading;

  function handleCountryChange(value) {
    setCountry(value);
  }

  function handleSearch(query) {
    setSearchTerm(query);
  }

  return (
    <AppShell onCountryChange={handleCountryChange}>
      <div className="home-page">
        <SearchBar onSearch={handleSearch} />

        {searchResults.length > 0 && (
          <div className="home-page__search-results">
            <MealsGrid meals={searchResults} />
          </div>
        )}

        {/* بنر */}
        <div className="home-page__banner-wrapper">
          
          <a  href="https://www.delino.com/app?"
            target="_blank"
            rel="noreferrer"
            className="home-page__banner-link"
          >
            <img
              src="/images/banner1.jpg"
              alt="بنر دلینو"
              className="home-page__banner"
            />
          </a>
        </div>

        <CategoryGrid />

        {/* Menu */}
        <div className="home-page__menu">
          <div className="home-page__menu-header">
            <h2 className="home-page__menu-title">منو</h2>

            <div className="home-page__more">
              <h3 className="home-page__more-title">غذا های بیشتر</h3>

              <img
                src="/images/arrowToLeft.svg"
                alt=""
                className="home-page__more-icon"
              />
            </div>
          </div>

          <div className="home-page__meals">
            {loading ? (
              <p className="home-page__loading">در حال بارگذاری...</p>
            ) : (
              <MealsGrid meals={meals} />
            )}
          </div>
        </div>

        {/* App Download Banner */}
        <div className="home-page__app-banner">
          <div className="home-page__app-content">
            <div className="home-page__app-heading">
              <h3 className="home-page__app-title">
                اپلیکیشن موبایل دلینو
              </h3>

              <p className="home-page__app-description">
                برای دریافت لینک دانلود اپلیکیشن دلینو، شماره موبایلت رو وارد کن
              </p>
            </div>

            <div className="home-page__app-form">
              <input
                type="text"
                placeholder="۰۹۱۲xxxxxx"
                maxLength={11}
                className="home-page__app-input"
              />

              <button className="btn btn-primary home-page__app-button">
                دریافت لینک دانلود
              </button>
            </div>

            <div className="home-page__app-labels">
              {[
                "lable-aplication",
                "lable2-aplication",
                "lable3-aplication",
                "lable6-aplication",
                "lable5-aplication",
                "lable4-aplication",
              ].map((img) => (
                <img
                  key={img}
                  src={`/images/${img}.png`}
                  alt=""
                  className="home-page__app-label"
                />
              ))}
            </div>
          </div>

          <div className="home-page__phone">
            <img
              src="/images/phone-bannerAplication.png"
              alt=""
            />
          </div>
        </div>

        {/* Description */}
        <div className="home-page__description">
          <h2 className="home-page__description-title">
            سفارش آنلاین غذا از بهترین رستوران‌‌ها و فست‌فود‌‌ها در رشت
          </h2>

          <p className="home-page__description-text">
            با استفاده از وبسایت و اپلیکیشن سفارش آنلاین غذای دلینو شما میتونید
            به راحتی و در سریع‌ترین زمان ممکن غذای مورد علاقه‌ی خودتون رو از
            بهترین رستوران‌ها و فست‌فودهای تهران، قم، کرج، گرگان، یزد، ارومیه و
            سایر شهرهای ایران سفارش بدین.
          </p>
        </div>

        <div className="home-page__divider" />

        {/* Trust / License */}
        <div className="home-page__trust">
          <div className="home-page__logos">
            <img
              src="/images/logo-kasbokar.png"
              alt=""
              className="home-page__logo"
            />

            <img
              src="/images/logo.png"
              alt=""
              className="home-page__logo"
            />

            <img
              src="/images/logo (1).png"
              alt=""
              className="home-page__logo"
            />
          </div>

          <div className="home-page__license">
            <p className="home-page__license-text">
              تمامی کالاها و خدمات این سایت، دارای مجوزهای لازم از مراجع مربوطه
              می‌باشند و فعالیت‌های این سایت تابع قوانین و مقررات جمهوری اسلامی
              ایران است.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}