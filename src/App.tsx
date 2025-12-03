import { Trans, useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";

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
    <div className="flex items-center justify-center h-screen">
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
    </div>
  );
}
