import { Trans, useTranslation } from "react-i18next";
import LanguageSelector from "./components/common/LanguageSelector";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function App() {
  const { t } = useTranslation();

  // dynamic translation
  const description = t("description", {
    returnObjects: true,
    line: 1,
  }) as {
    line1: string;
    line2: string;
  };

  return (
    <main className="min-h-screen">
      {/* Theme Switcher */}
      <header className="flex justify-end h-18 px-4">
        <ThemeSwitcher />
      </header>

      {/* Localization */}
      <section className="flex items-center justify-center h-[90vh]">
        <div className="space-y-4">
          <LanguageSelector />
          <h1 className="text-3xl font-bold underline">{t("greeting")}</h1>
          <p>{description.line1}</p>
          <p>{description.line2}</p>

          {/* interpolation */}
          {/* <p>{t("interpolation", { value: "Interpolation" })}</p> */}
          <Trans
            i18nKey={"interpolation"}
            values={{ value: "Interpolation" }}
            components={{ 1: <b /> }}
          />
        </div>
      </section>
    </main>
  );
}
