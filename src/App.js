import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar.js";
import { Banner } from "./components/Banner.js";
import { Skills } from "./components/Skills.js";
import { Books } from "./components/Books.js";
import { BookHead } from "./components/BookHead.js";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Books />
      <BookHead/>
    </div>
  );
}

export default App;
