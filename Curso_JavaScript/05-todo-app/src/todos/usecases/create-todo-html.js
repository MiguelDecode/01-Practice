import { Todo } from "../models/todo.model";

/**
 *
 * @param {Todo} todo
 */
export const createTodoHTML = (todo) => {
  if (!todo) throw new Error("A TODO object is required");

  const html = `<h2>${todo.description}</h2>`;

  const liElement = document.createElement("li");
  liElement.innerHTML = html;

  return liElement
};
