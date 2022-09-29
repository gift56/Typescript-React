import { useState, createContext } from "react";

export const ThemeContext = createContext<any>({ theme: "light", undefined });

export const ThemeProvider: any = ({ children }: any) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
