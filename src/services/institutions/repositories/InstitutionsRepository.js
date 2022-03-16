import axios from "axios"

const app = axios.create({baseURL: 'http://18.228.4.142:3030'})

export default class InstitutionsRepository {
  constructor() {
  }

  getInstitutionsList() {
    let institutionsList
    app.get('/institutions').then((response) => {
      institutionsList = response
    })
    return institutionsList
  }

  findInstitutionByName(name) {
    app.get('/institutions').then((response) => {
      return response.find(
        (book) => book.data.books.name === name
      );
    })

  }
}