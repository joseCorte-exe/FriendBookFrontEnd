import React from "react";
import { ButtonView } from "./ButtonView";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Button({ add, delet, edit, modalTitle }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ButtonView
        primary={add ? "00B900" : delet ? "FF0000" : edit ? "0066FF" : "C4C4C4"}
        hover={add ? "009200" : delet ? "920000" : edit ? "006692" : "C4C4C4"}
        active={add ? "006800" : delet ? "680000" : edit ? "006668" : "C4C4C4"}
        onClick={() => edit? null : handleOpen() }
      >
        {add ? "adicionar" : delet ? "remover" : edit ? "editar" : "undefined"}
      </ButtonView>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="parent-modal-title">{modalTitle}</h2>
          <p id="parent-modal-description"></p>
        </Box>
      </Modal>
    </>
  );
}
