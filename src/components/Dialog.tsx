import { Button, CloseButton, InputField } from "./_index";
import { DialogBox } from "../styles/styles";
import { DialogProps } from "../types/interfaces";

export const Dialog = ({
  onClose,
  value,
  setValue,
  onClick,
  handleSave,
}: DialogProps) => (
  <DialogBox onClick={onClick}>
    <CloseButton onClick={onClose} />
    <InputField mode={"light"} value={value} onInputChange={setValue} />
    <Button
      type="button"
      mode="update"
      title="Update Task"
      onClick={handleSave}
    />
  </DialogBox>
);
