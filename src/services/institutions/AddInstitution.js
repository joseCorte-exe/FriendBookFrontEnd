import axios from "axios"

const app = axios.create({baseURL: 'http://18.228.4.142:3030'})
export default class AddInstitution {
  createInstitution(
    institutionName,
    houseNumber,
    address,
    administratorName,
    administratorEmail
    ) {
    app.post('/create/institution', {
      institutionName,
      houseNumber,
      address,
      administratorName,
      administratorEmail
    }).then((res) => {alert('instituição criada com sucesso')})
  }
}
