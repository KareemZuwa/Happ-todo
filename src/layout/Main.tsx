import { CheckboxIcon, DeleteIcon, EditIcon } from "../components/_index";
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
      <CheckboxIcon isChecked={isChecked} onToggle={handleOnChecked} />
      <EditIcon onEdit={handleOnEdit} />
      <DeleteIcon onDelete={handleOnDelete} />
    </StyledMain>
  );
};
