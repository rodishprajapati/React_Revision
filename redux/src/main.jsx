import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./tailwind.css";
// import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";
import todoStore from "./TodoApp/TodoRedux/store.jsx";
import TodoApp from "./TodoApp/TodoApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <Provider store={todoStore}>
      <TodoApp />
    </Provider>
  </StrictMode>
);
