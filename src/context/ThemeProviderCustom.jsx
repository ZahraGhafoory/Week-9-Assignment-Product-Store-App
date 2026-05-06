import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

export function ThemeProviderCustom({ children }) {
  const { state } = useContext(SettingsContext);

  const theme = createTheme({
    palette: {
      mode: state.theme,

      background: {
        default:
          state.theme === "light"
            ? "#f0fff4" // light green
            : "#1b2f2a", // dark green
      },

      primary: {
        main: state.theme === "light" ? "#22c55e" : "#4ade80",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}