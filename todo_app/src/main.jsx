import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./tailwind.css";
import TodoApp from "./App";
// import AppJava from "./javascript.jsx";
// import TodoApp from "./todo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <TodoApp /> */}
    {/* <App /> */}
    <TodoApp />
  </StrictMode>
);
