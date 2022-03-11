import React from "react";

import Button from "../../components/button/Button";
import Card from "../../components/Card/Card";

import { BookRepository } from "../../services/books/repositories/BooksRepository";

import bannerInstitutiuon from "../../assets/banner.svg";

import { BooksPageView } from "./BooksPageView";

export default function BooksPage() {
  const bookList = new BookRepository();

  return (
    <BooksPageView>
      <h2 className="pageTitle">Livros Gerais</h2>
      <img src={bannerInstitutiuon} alt="Para Quem Gosta de Ler" className="banner" />
      <p><strong>Aqui você pode ver informações basicas dos livros em nosso banco de livros.</strong></p>

      <section className="actionMenu">
        <label>adicionar ou remover livro</label>
        <div>
          <Button add modalTitle="Adicione um titulo" book />
          <Button delet modalTitle="Remova um titulo" book />
        </div>
      </section>

      <section className="content">
        {
          bookList.list().map((value) => (
            <Card
            bookName={value.name}
            imgUrl="https://m.media-amazon.com/images/I/41IRFCLk-kL._SY346_.jpg"
            small
          />
          ))
        }
      </section>
    </BooksPageView>
  );
}
