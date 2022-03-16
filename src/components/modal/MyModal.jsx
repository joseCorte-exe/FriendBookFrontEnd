import React, {useState} from 'react'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import AddBook from "../../services/books/AddBook";
import AddInstitution from '../../services/institutions/AddInstitution';


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

export default function MyModal(addBook, deleteBook, addInstitution, deleteInstitution) {
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
    setBookName(e.target.value)
  }  
  function handleAddress(e) {
    setBookName(e.target.value)
  }
  function handleAdministratorName(e) {
    setBookName(e.target.value)
  }
  function handleAdministratorEmail(e) {
    setBookName(e.target.value)
  }

  const handleClose = () => {
    setOpen(false)
  };
  const handleOpen = () => {
    setOpen(true);
  };


  console.log(open)

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
  >
    <Box sx={{ ...style }}>
      {
        addBook?
        <>
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
        </> : deleteBook?
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
        <>
          <h2 id="parent-modal-title">Adicione um livro</h2>
          <p id="parent-modal-description"></p>
          <hr />
          <label type="text" >nome da instituição</label>
          <input value={bookName} onChange={handleInstitutionName}/>
          <label>numero da instituição(numero do endereço)</label>
          <input value={launch} onChange={handleInstitutionNumber}/>
          <label>rua da instituição</label>
          <input value={edition} onChange={handleAddress}/>
          <label>nome do administrador</label>
          <input value={author} onChange={handleAdministratorName}/>
          <label>email do administrador</label>
          <input value={author} onChange={handleAdministratorEmail}/>

          <button onClick={() => {createInstitution.createInstitution(
            institutionName,
            institutionNumber,
            address,
            administratorName,
            administratorEmail
            )}} >Criar!</button> 
        </> : deleteInstitution?
        <>
          <h2 id="parent-modal-title">Adicione um livro</h2>
          <p id="parent-modal-description"></p>
          <hr />
          <label type="text" >nome da instituição</label>
        </> : null
      }
    </Box>
  </Modal>
  )
}
