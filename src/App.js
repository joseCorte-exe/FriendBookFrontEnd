import "./App.css";
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";

import BooksPage from "./pages/booksPage/BooksPage";
import InstitutiuonPage from "./pages/institutionsPage/InstitutionsPage";
import HomePage from "./pages/home/HomePage";

import "./styles/global.css";

import { AppView } from "./styles/layouts/appstyle";

function App() {
  return (
    <AppView>
      <header>
        <section>
          <Link to="" >Home</Link>
          <Link to="institutions" >Instituições</Link>
          <Link to="books" >Livros</Link>
        </section>
        <h1>FriendBook</h1>
        <label>Login</label>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="institutions" element={<InstitutiuonPage />} />
      </Routes>
    </AppView>
  );
}

export default App;
