import React, { useEffect, useState } from "react";
import axios from 'axios';

import Button from "../../components/button/Button";
import Card from "../../components/Card/Card";

import { BookRepository } from "../../services/books/repositories/BooksRepository";

import bannerInstitutiuon from "../../assets/banner.svg";

import { BooksPageView } from "./BooksPageView";

export default function BooksPage() {
  const [books, setBooks] = useState([])
  const bookList = new BookRepository();

  const app = axios.create({baseURL: 'http://18.228.4.142:3030'})

  useEffect(() => {
    app.get('/books')
      .then((res) => {
        setBooks(res.data)
      })
  }, [])

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
          books.map((value) => (
            <Card
            bookName={value.bookName}
            imgUrl="https://m.media-amazon.com/images/I/41IRFCLk-kL._SY346_.jpg"
            small
          />
          ))
        }
      </section>
    </BooksPageView>
  );
}
