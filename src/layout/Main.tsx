import { StyledMain } from "../styles/styles";
/**Temporära imports */
import styled from "styled-components";
import { useState } from "react";
import { theme } from "../styles/theme";
import { IconButton } from "../components/IconButton";

export const CheckboxIcon = styled.svg.attrs<{ $isChecked: boolean }>({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
})`
  width: ${theme.fontSizes.large};
  height: ${theme.fontSizes.large};
  g path:last-child {
    fill: ${(props) =>
      props.$isChecked ? theme.colors.lightGreen : theme.colors.offWhite};
  }
`;

export const Main = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleOnChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <StyledMain>
      <div>Main</div>
      <IconButton onClick={handleOnChecked}>
        <CheckboxIcon $isChecked={isChecked}>
          <g fill="none" fillRule="evenodd">
            <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z" />
            <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm11.95 6.796a1 1 0 0 0-1.414-1.415l-4.95 4.95-2.121-2.121a1 1 0 1 0-1.415 1.414l2.758 2.758a1.1 1.1 0 0 0 1.556 0l5.586-5.586Z" />
          </g>
        </CheckboxIcon>
      </IconButton>
    </StyledMain>
  );
};
