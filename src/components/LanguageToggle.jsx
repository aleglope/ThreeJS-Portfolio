import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const LanguageToggle = ({ className = "" }) => {
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage || i18n.language;

  const languages = [
    { code: "es", label: t("languageSwitcher.es") },
    { code: "en", label: t("languageSwitcher.en") },
  ];

  return (
    <div
      role="group"
      aria-label={t("languageSwitcher.ariaLabel")}
      className={`inline-flex items-center gap-1 rounded-full border border-black-300 bg-black-200 p-1 ${className}`}
    >
      {languages.map(({ code, label }) => {
        const isActive = activeLanguage === code;

        return (
          <button
            key={code}
            type="button"
            onClick={() => i18n.changeLanguage(code)}
            aria-pressed={isActive}
            aria-current={isActive ? "true" : undefined}
            className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-300 ${
              isActive
                ? "bg-black-300 text-white"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
