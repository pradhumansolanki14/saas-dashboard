import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/inter";

import { useThemeStore } from "./store/useThemeStore";

const Root = () => {
  const { theme } = useThemeStore();

  return (
    <div className={theme}>
      <App />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);