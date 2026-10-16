import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    // Add the current theme class to the root HTML element to apply global theme styles
    document.documentElement.classList.add(theme)

    const toggleTheme = () => {
        // Use the callback in setTheme to set the new theme
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "dark" ? "light" : "dark";
            // Remove both theme classes first
            document.documentElement.classList.remove("light", "dark");
            // Add the current theme class
            document.documentElement.classList.add(newTheme);
            return newTheme;
        });
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;