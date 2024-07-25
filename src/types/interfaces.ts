/**
 * Extends Styled Component Palette interface
 * to include custom style definitions for the theme.
 */

export interface Theme {
  main: string;
}

/**
 * Interfaces and states used for defining actions and states within the Context store.
 */

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface State {
  todos: Todo[];
  newTodoTitle: string;
}

export type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "EDIT_TODO"; payload: { id: string; title: string } }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "SET_NEW_TODO_TITLE"; payload: string };

/**
 * Interfaces used for defining props and states within the components directory.
 */
