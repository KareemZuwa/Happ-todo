import { Button, CloseButton, InputField } from "./_index";
import { DialogBox } from "../styles/styles";
import { DialogProps } from "../types/interfaces";

export const Dialog = ({ onClose, value, onChange }: DialogProps) => (
  <DialogBox>
    <CloseButton onClick={onClose} />
    <InputField mode={"light"} value={value} onInputChange={onChange} />
    <Button type="submit" mode="update" title="Update Task" />
  </DialogBox>
);
