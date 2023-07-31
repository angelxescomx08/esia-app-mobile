import { Modal } from "@mantine/core";
import { type PropsWithChildren } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const CustomModal = ({
  onClose,
  open,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Modal
      opened={open}
      onClose={onClose}
      centered
      withCloseButton={false}
      sx={{
        "& .mantine-Modal-body": {
          padding: 0,
        },
        "& .mantine-Modal-content": {
          borderRadius: "1.5rem",
        },
      }}
    >
      <div className="relative w-full h-24 overflow-hidden">
        <svg
          viewBox="0 0 411 138.5"
          xmlns="http://www.w3.org/2000/svg"
          className=" w-full text-azul absolute -top-9"
        >
          <path
            fill="currentColor"
            d="M411,20C411,8.962 402.038,0 391,0L20,0C8.962,0 0,8.962 0,20L0,20.526L0,119.474C43.653,131.257 102.849,138.5 168,138.5L168,138.5C302.115,138.5 411,107.806 411,70L411,20Z"
          />
        </svg>
      </div>
      {children}
    </Modal>
  );
};
