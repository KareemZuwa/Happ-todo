import { FormEventHandler, ReactNode } from "react";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

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
  xs: string;
  sm: string;
  md: string;
  lg: string;
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
 * Interfaces used for defining props and states within the components directory.
 */

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  mode: "add" | "update";
}

export interface DialogProps {
  onClose: () => void;
  value: string;
  setValue: (newValue: string) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleSave: () => void;
}

export interface FormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  row?: boolean;
}

export interface InputFieldProps {
  value: string;
  onInputChange: (value: string) => void;
  placeholder?: string;
  mode: "dark" | "light";
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: string) => void;
  initialValue: string;
  onChangeModalValue: (newValue: string) => void;
}

export interface TodoListItemProps {
  todo: Todo;
  index: number;
  deleteTodo: (id: string) => void;
  markTodoAsCompleted: (id: string) => void;
  handleEditClick: (id: string, title: string) => void;
}
