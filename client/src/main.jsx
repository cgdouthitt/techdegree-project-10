import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { LoadingProvider } from "./context/LoadingContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

import "./styles/reset.css";
import "./styles/global.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
