import { Todo, State } from "../types/interfaces";

const mockTodos: Todo[] = [
  { id: "1", title: "Tvätta lakan", completed: false },
  { id: "2", title: "Hämta cykeln", completed: false },
  { id: "3", title: "Ring facket", completed: false },
];

const initialState: State = {
  todos: mockTodos,
  newTodoTitle: "",
};

console.log(initialState);
