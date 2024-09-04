import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import store from "./store";
import { Provider } from "react-redux";
import IncrementApp from "./Increment App/incrementApp.jsx";
import TodoApp from "./TodoApp/todoApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <TodoApp />
      <br />
      <br />
      <hr />
      <br />
      <IncrementApp />
    </Provider>
  </StrictMode>
);
