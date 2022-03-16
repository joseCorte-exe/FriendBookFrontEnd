import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import AddBook from "../../services/books/AddBook";
import AddInstitution from '../../services/institutions/AddInstitution';
import { ButtonView } from "./ButtonView";


export default function Button({ addBook, deleteBook, addInstitution, deleteInstitution, edit, title }) {
  const [open, setOpen] = useState(false);

  const [bookName, setBookName] = useState('')
  const [launch, setLaunch] = useState('')
  const [edition, setEdition] = useState('')
  const [author, setAuthor] = useState('')
  const [publisher, setPublisher] = useState('')
  const [units, setUnits] = useState(0)
  const [synopsys, setSynopsys] = useState('')

  const [institutionName, setInstitutionName] = useState('')
  const [institutionNumber, setInstitutionNumber] = useState('')
  const [address, setAddress] = useState('')
  const [administratorName, setAdministratorName] = useState('')
  const [administratorEmail, setAdministratorEmail] = useState('')

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

  const createBook = new AddBook()
  const createInstitution = new AddInstitution()

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

  function handleInstitutionName(e) {
    setInstitutionName(e.target.value)
  }
  function handleInstitutionNumber(e) {
    setInstitutionNumber(e.target.value)
  }  
  function handleAddress(e) {
    setAddress(e.target.value)
  }
  function handleAdministratorName(e) {
    setAdministratorName(e.target.value)
  }
  function handleAdministratorEmail(e) {
    setAdministratorEmail(e.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  };
  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <>
      <ButtonView
        primary={addBook || addInstitution ? "00B900" : deleteBook || deleteInstitution ? "FF0000" : edit ? "0066FF" : "C4C4C4"}
        hover={addBook || addInstitution ? "009200" : deleteBook || deleteInstitution ? "920000" : edit ? "006692" : "C4C4C4"}
        active={addBook || addInstitution ? "006800" : deleteBook || deleteInstitution ? "680000" : edit ? "006668" : "C4C4C4"}
        onClick={ () => handleOpen() }
      >
        {title? title : addBook || addInstitution ? "adicionar" : deleteBook || deleteInstitution ? "remover" : edit ? "editar" : undefined}
      </ButtonView>

      <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
  >
    <Box sx={{ ...style }}>
      {
        addBook?
        <div style={{display: 'flex', flexDirection: 'column'}}>
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
          <button onClick={() => {createBook.createBook(
            bookName,
            launch,
            edition,
            author,
            publisher,
            units,
            synopsys
            )}} >Criar!</button>
        </div> : deleteBook?
        <>
          <h2 id="parent-modal-title">Remova um livro</h2>
          <p id="parent-modal-description"></p>
          <hr />
          <label>titulo</label>
          <input value={bookName} onChange={handleBookName}/>
        </> : null
      }

      {
        addInstitution?
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <h2 id="parent-modal-title">Adicione uma instituição</h2>
          <p id="parent-modal-description"></p>
          <hr />
          <label type="text" >nome da instituição</label>
          <input value={institutionName} onChange={handleInstitutionName}/>
          <label>numero da instituição(numero do endereço)</label>
          <input value={institutionNumber} onChange={handleInstitutionNumber}/>
          <label>rua da instituição</label>
          <input value={address} onChange={handleAddress}/>
          <label>nome do administrador</label>
          <input value={administratorName} onChange={handleAdministratorName}/>
          <label>email do administrador</label>
          <input value={administratorEmail} onChange={handleAdministratorEmail}/>

          <ButtonView
            primary={addBook || addInstitution ? "00B900" : deleteBook || deleteInstitution ? "FF0000" : edit ? "0066FF" : "C4C4C4"}
            hover={addBook || addInstitution ? "009200" : deleteBook || deleteInstitution ? "920000" : edit ? "006692" : "C4C4C4"}
            active={addBook || addInstitution ? "006800" : deleteBook || deleteInstitution ? "680000" : edit ? "006668" : "C4C4C4"}
            onClick={() => {createInstitution.createInstitution(
              institutionName,
              institutionNumber,
              address,
              administratorName,
              administratorEmail
            )}} >Criar!</ButtonView> 
        </div> : deleteInstitution?
        <>
          <h2 id="parent-modal-title">Adicione uma instituição</h2>
          <p id="parent-modal-description"></p>
          <hr />
          <label type="text" >nome da instituição</label>
        </> : null
      }
    </Box>
  </Modal>
    </>
  );
}
