import { Dialog } from "../components/Dialog";
import { StyledMain } from "../styles/styles";

export const Main = () => {
  const handleClose = () => {
    console.log("Close icon clicked");
  };
  return (
    <StyledMain>
      <div>Main</div>
      <Dialog onClick={handleClose}/>
    </StyledMain>
  );
};
