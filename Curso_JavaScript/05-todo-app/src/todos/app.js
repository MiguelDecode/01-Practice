import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./usecases";

const elementIDs = {
  TodoList: ".todo-list",
};

/**
 * Where all the app is display
 * @param {String} elementId Id idenntificator tag html
 */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(elementIDs.TodoList, todos);
  };

  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).appendChild(app);
    displayTodos();
  })();
};
