import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const countries = [
  {
    value: "American",
    label: "آمریکا",
    flag: "https://flagcdn.com/w20/us.png",
  },
  {
    value: "British",
    label: "انگلیس",
    flag: "https://flagcdn.com/w20/gb.png",
  },
  {
    value: "Canadian",
    label: "کانادا",
    flag: "https://flagcdn.com/w20/ca.png",
  },
  {
    value: "French",
    label: "فرانسه",
    flag: "https://flagcdn.com/w20/fr.png",
  },
  {
    value: "Chinese",
    label: "چین",
    flag: "https://flagcdn.com/w20/cn.png",
  },
];

export default function CountrySelect({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function handlePick(country) {
    setSelected(country);
    setOpen(false);
    onSelect?.(country.value);
  }

  return (
    <div ref={ref} className="country-select">
      {/* Trigger */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="country-select__trigger"
      >
        <span className="country-select__selected">
          {selected ? (
            <>
              <img
                src={selected.flag}
                alt=""
                className="country-select__flag"
              />

              {selected.label}
            </>
          ) : (
            <span className="country-select__selected-placeholder">
              🌍 غذاهای کشور:
            </span>
          )}
        </span>

        <FiChevronDown className="country-select__chevron" />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="country-select__dropdown">
          {countries.map((country) => (
            <div
              key={country.value}
              onClick={() => handlePick(country)}
              className="country-select__option"
            >
              <img src={country.flag} alt="" className="country-select__flag" />

              {country.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
