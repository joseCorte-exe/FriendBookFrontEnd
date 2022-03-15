import React, { useEffect, useState } from "react";
import { ButtonView } from "./ButtonView";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import addBook from "../../services/books/AddBook";

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
  const [open, setOpen] = useState(false);
  const [bookName, setBookName] = useState('')
  const [launch, setLaunch] = useState('')
  const [edition, setEdition] = useState('')
  const [author, setAuthor] = useState('')
  const [publisher, setPublisher] = useState('')
  const [units, setUnits] = useState(0)
  const [synopsys, setSynopsys] = useState('')

  const create = new addBook()

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleBookName(e) {
    setBookName(e.target.value)
  }
  function handleLaunch(e) {
    setLaunch(e.target.value)
  }
  function handleEdition(e) {
    setEdition(e.target.value)
  }
  function handleAuthor(e) {
    setAuthor(e.target.value)
  }
  function handleUnits(e) {
    setUnits(e.target.value)
  }
  function handleSynopsys(e) {
    setSynopsys(e.target.value)
  }
  function handlePublisher(e) {
    setPublisher(e.target.value)
  }

  

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
          <h2 id="parent-modal-title">Adicione um livro</h2>
          <p id="parent-modal-description"></p>
          <hr />
          <label type="text"  >titulo</label>
          <input value={bookName} onChange={handleBookName}/>
          <label>lançamento</label>
          <input value={launch} onChange={handleLaunch}/>
          <label>edição</label>
          <input value={edition} onChange={handleEdition}/>
          <label>autor</label>
          <input value={author} onChange={handleAuthor}/>
          <label>publicadora</label>
          <input value={publisher} onChange={handlePublisher}/>
          <label>unidades</label>
          <input value={units} onChange={handleUnits}/>
          <label>sinopse</label>
          <input value={synopsys} onChange={handleSynopsys}/>
          <button onClick={() => {create.createBook(
            bookName,
            launch,
            edition,
            author,
            publisher,
            units,
            synopsys
            )}} >Criar!</button>
        </Box>
      </Modal>
    </>
  );
}
