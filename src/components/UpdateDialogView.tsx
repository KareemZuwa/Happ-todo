import { ReactNode } from "react";
import styled from "styled-components";

export interface UpdateDialogViewProps {
  children: ReactNode;
}

const UpdateDialogViewBox = styled.section`
  width: 100%;
  margin-bottom: 4rem;
`;

export const UpdateDialogView = ({ children }: UpdateDialogViewProps) => {
  return <UpdateDialogViewBox>{children}</UpdateDialogViewBox>;
};
