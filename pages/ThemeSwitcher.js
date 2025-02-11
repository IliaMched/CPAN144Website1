export default function ThemeSwitcher({ darkMode, setDarkMode }) {
  return (
    <div className="theme-switcher">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
