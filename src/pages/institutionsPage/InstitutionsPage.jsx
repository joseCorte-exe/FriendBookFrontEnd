import React, { useState, useEffect } from "react";
import axios from "axios"


import Button from "../../components/button/Button";
import Card from "../../components/Card/Card";

import bannerInstitutiuon from "../../assets/banner.svg";

import { InstitutionView } from "./InstitutionsPageView";
import InstitutionsRepository from "../../services/institutions/repositories/InstitutionsRepository";

export default function Institutiuon() {
  const [institutionsList, setInstitutionsList] = useState([])
  const institutionsRepo = new InstitutionsRepository()

  const app = axios.create({baseURL: 'http://18.228.4.142:3030'})

  useEffect(() => {
    app.get('/institutions').then((response) => {
      setInstitutionsList(response.data)
    })
  }, [])

  console.log(institutionsList)

  return (
    <InstitutionView>
      <h2 className="pageTitle">Nossas instituições</h2>

      <img src={bannerInstitutiuon} className="banner" />
      <p>
        <strong>
          Aqui voce pode ver todas as instituições cadastradas no nosso banco de instituições!
        </strong>
      </p>

      <section className="actionMenu">
        <label>adicionar ou remover instituição</label>
        <div>
          <Button addInstitution />
          <Button deleteInstitution />
        </div>
      </section>

      <section className="content">
        {
          institutionsList.map((value) => (
            <Card
            bookName={value.name}
            imgUrl="https://www.contandodestinos.com/wp-content/uploads/2017/02/Melhores-Sebos-de-Sao-Paulo.jpg"
            small
          />
          ))
        }
      </section>
    </InstitutionView>
  );
}
