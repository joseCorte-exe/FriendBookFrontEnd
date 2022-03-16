import axios from "axios"

const app = axios.create({baseURL: 'http://18.228.4.142:3030'})
export default class AddBook {
  createBook(
    bookName,
    launchedAt,
    Edition,
    Author,
    Publisher,
    units,
    synopsis
    ) {
    app.post('/create/book', {
      bookName,
      launchedAt,
      Edition,
      Author,
      Publisher,
      units,
      synopsis
    }).then((res) => {alert('Livro criado com sucesso')})
  }
}
