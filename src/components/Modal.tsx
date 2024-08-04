import styled from "styled-components";
import { Dialog } from "./_index";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: string) => void;
  initialValue: string;
  onChangeModalValue: (newValue: string) => void;
}

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

export const Modal = ({
  isOpen,
  onClose,
  onSave,
  initialValue,
  onChangeModalValue,
}: ModalProps) => {
  const handleSave = () => {
    onSave(initialValue);
    onClose();
  };
  return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <Dialog
        onClose={onClose}
        setValue={onChangeModalValue}
        value={initialValue}
        onClick={(e) => e.stopPropagation()}
        handleSave={handleSave}
      />
    </Overlay>
  );
};
