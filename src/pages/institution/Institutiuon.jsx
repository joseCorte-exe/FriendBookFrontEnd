import React from "react";

import Button from "../../components/button/Button";
import Card from "../../components/Card/Card";

import { BookRepository } from "../../services/books/repositories/BooksRepository";

import bannerInstitutiuon from "../../assets/banner.svg";

import { InstitutionView } from "./Institution";
import { useParams } from "react-router";

export default function Institutiuon() {
  const bookList = new BookRepository();

  const institutionName = useParams()

  return (
    <InstitutionView>
      <h2 className="pageTitle">Instituição Livros&Autores</h2>
      <p>
        Aqui voce pode ver todas as configurações da instituição selicionada
        anteriormente.
      </p>

      <img src={bannerInstitutiuon} className="banner" />
      <h3>Sebo Al-Farabi</h3>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
        aliquet arcu. Pellentesque fringilla tellus eu lorem imperdiet, sed
        tristique enim tincidunt. Curabitur mollis risus vel libero
        sollicitudin, sed sollicitudin elit ullamcorper. Cras vulputate pulvinar
        sem, eu elementum lectus ullamcorper ornare. Ut leo neque, dictum
        tincidunt dictum a, blandit vel lectus. Duis interdum ligula metus, non
        facilisis tortor rutrum sed. Morbi in augue urna. Nulla facilisi.
      </p>

      <section className="actionMenu">
        <label>adicionar ou remover livro</label>
        <div>
          <Button add modalTitle="Adicione um titulo à instituição" />
          <Button delet modalTitle="Remova um titulo da instituição" />
        </div>
      </section>

      <section className="content">
        {
          bookList.list().map((value) => (
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
