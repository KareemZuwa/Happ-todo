import { Button, IconButton, InputField } from "./_index";
import { DialogBox, CloseIcon } from "../styles/styles";
import { DialogProps } from "../types/interfaces";

export const Dialog = ({ onClose, value, onChange }: DialogProps) => (
  <DialogBox>
    <IconButton onClick={onClose}>
      <CloseIcon>
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
          <path d="m12 13.414 5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586 6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414L12 13.414Z" />
        </g>
      </CloseIcon>
    </IconButton>
    <InputField mode={"light"} value={value} onInputChange={onChange} />
    <Button type="submit" mode="update" title="Update Task" />
  </DialogBox>
);
