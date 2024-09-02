import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import App from "./App";
import ItemList from "./search";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ItemList />
  </StrictMode>
);
