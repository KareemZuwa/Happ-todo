/**
 * Extends Styled Component interface
 * to include custom style definitions for the Theme.
 */

export interface Theme {
  breakpoints: ThemeBreakpoints;
  background: ThemeBackground;
  colors: ThemeColors;
  fontSizes: ThemeFontsizes;
  fontWeights: ThemeFontWeights;
  borders: ThemeBorderRadius;
  shadows: ThemeShadows;
}

//Colors//
export interface ThemeColors {
  offWhite: string;
  purpleLight: string;
  purpleDark: string;
  lightGrey: string;
  middleGrey: string;
  darkGrey: string;
  lightGreen: string;
  mainGreen: string;
  darkGreen: string;
}

//Fonts//
export interface ThemeFontsizes {
  small: string;
  medium: string;
  large: string;
}

export interface ThemeFontWeights {
  regular: number;
  medium: number;
  semibold: number;
}

export interface ThemeBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

export interface ThemeBackground {
  gradient: string;
}

export interface ThemeBorderRadius {
  md: string;
}

export interface ThemeShadows {
  shade1: string;
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

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  mode: "add" | "update";
}
