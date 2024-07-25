/**
 * Extends Styled Component interface
 * to include custom style definitions for the theme.
 */

export interface Theme {
  breakpoints: themeBreakpoints;
  background: themeBackground;
  colors: themeColors;
  fontSizes: themeFontsizes;
  fontWeights: themeFontWeights;
}

//Colors//
export interface themeColors {
  offWhite: string;
  purpur: string;
}

//Fonts//
export interface themeFontsizes {
  small: string;
  medium: string;
  large: string;
}

export interface themeFontWeights {
  regular: number;
  medium: number;
  semibold: number;
}

export interface themeBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

export interface themeBackground {
  gradient: string;
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
