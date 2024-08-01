import { ReactNode } from "react";
import styled from "styled-components";

export interface UpdateDialogViewProps {
  children: ReactNode;
}

const UpdateDialogViewBox = styled.dialog`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark backdrop */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UpdateDialogView = ({
  children,
}: UpdateDialogViewProps) => {
  return <UpdateDialogViewBox open>{children}</UpdateDialogViewBox>;
};
