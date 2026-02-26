import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const themes = [
    "bg-black",
    "bg-blue-900",
    "bg-green-900",
    "bg-purple-900",
    "bg-red-900",
    "bg-pink-900",
    "bg-amber-900"
  ];

  const [themeIndex, setThemeIndex] = useState(
    () => Number(localStorage.getItem("themeIndex")) || 0
  );

  useEffect(() => {
    // Save theme
    localStorage.setItem("themeIndex", themeIndex);

    // Optional: apply dark class when first theme (bg-black)
    if (themeIndex === 0) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [themeIndex]);

  const changeTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <ThemeContext.Provider
      value={{
        bgColor: themes[themeIndex],
        changeTheme,
        themeIndex
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);