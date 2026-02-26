import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  // Available themes
  const themes = [
    "bg-black",      // 0 - Dark
    "bg-blue-900",   // 1 - Blue
    "bg-green-900",  // 2 - Green
    "bg-purple-900", // 3 - Purple
    "bg-red-900",    // 4 - Red
    "bg-pink-900",   // 5 - Pink
    "bg-amber-900"   // 6 - Amber
  ];

  // Load saved theme
  const [themeIndex, setThemeIndex] = useState(() => {
    const saved = localStorage.getItem("themeIndex");
    return saved ? Number(saved) : 0;
  });

  // Apply theme + save
  useEffect(() => {

    localStorage.setItem("themeIndex", themeIndex);

    // Apply dark mode class only for first theme
    if (themeIndex === 0) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [themeIndex]);

  // OPTIONAL: old cycling function (can keep or remove)
  const changeTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  // ✅ NEW: direct theme selection (THIS FIXES YOUR PROBLEM)
  const setTheme = (index) => {
    setThemeIndex(index);
  };

  return (
    <ThemeContext.Provider
      value={{
        bgColor: themes[themeIndex],
        themeIndex,
        changeTheme, // optional
        setTheme     // NEW FUNCTION
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);