import { createContext, useReducer } from "react";

export const SettingsContext = createContext();

const initialState = {
  theme: "light",
  view: "grid",
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    case "TOGGLE_VIEW":
      return {
        ...state,
        view: state.view === "grid" ? "list" : "grid",
      };

    default:
      return state;
  }
}

export function SettingsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}