import "./App.css";

import BooksPage from "./pages/booksPage/BooksPage";
import Institutiuon from "./pages/institution/Institutiuon";
import HomePage from "./pages/home/HomePage";

import "./styles/global.css";

import { AppView } from "./styles/layouts/appstyle";

function App() {
  return (
    <AppView>
      <header>
        <section>
          <label>Home</label>
          <label>Instituições</label>
          <label>Livros</label>
        </section>
        <h1>FriendBook</h1>
        <label>Login</label>
      </header>
      <BooksPage />
      {/* <Institutiuon /> */}
      {/* <HomePage /> */}
    </AppView>
  );
}

export default App;
