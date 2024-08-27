import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./tailwind.css";
import AppJava from "./javascript.jsx";
// import TodoApp from "./todo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <TodoApp /> */}
    {/* <App /> */}
    <AppJava />
  </StrictMode>
);
