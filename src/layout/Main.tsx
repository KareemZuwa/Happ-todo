import { Checkbox, Delete, Edit } from "../assets/svgs/svg-components/_index.svg";
import { StyledMain } from "../styles/styles";
/**Temporära imports */
import { useState } from "react";

export const Main = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const handleOnChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleOnEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleOnDelete = () => {
    setIsDelete(!isDelete);
  };
  return (
    <StyledMain>
      <div>Main</div>
      <Checkbox isChecked={isChecked} onToggle={handleOnChecked} />
      <Edit onEdit={handleOnEdit} />
      <Delete onDelete={handleOnDelete} />
    </StyledMain>
  );
};
