import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/store";

import { SettingsProvider } from "./context/SettingsContext";
import { ThemeProviderCustom } from "./context/ThemeProviderCustom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <SettingsProvider>
        <ThemeProviderCustom>
          <QueryClientProvider client={queryClient}>
            
            <BrowserRouter>
              <App />
            </BrowserRouter>

          </QueryClientProvider>
        </ThemeProviderCustom>
      </SettingsProvider>
    </Provider>
  </StrictMode>
);