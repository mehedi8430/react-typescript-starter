import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "de", lang: "Deutsch" },
  { code: "ar", lang: "Arabic" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  // language direction set
  useEffect(() => {
    console.log("language direction", i18n.dir());
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <select onChange={(e) => changeLanguage(e.target.value)}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.lang}
          </option>
        ))}
      </select>
    </div>
  );
}
