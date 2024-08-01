import { ReactNode } from "react";
import styled from "styled-components";

export interface AddFormViewProps {
  children: ReactNode;
}

const AddFormViewBox = styled.section`
width: 100%;
margin-bottom: 4rem;
`;

export const AddFormView = ({ children }: AddFormViewProps) => {
  return <AddFormViewBox>{children}</AddFormViewBox>;
};
