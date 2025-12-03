import { MoonSvg, SunSvg } from "../assets/icons";
import useTheme from "../theme";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mt-4 mr-4">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <SunSvg className="size-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonSvg className="absolute size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  );
}
