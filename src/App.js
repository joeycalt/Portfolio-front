import './App.css';
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Projects from './pages/Projects';


function App() {
  const URL = 'https://real-portfolio-back.herokuapp.com/'
  return (
    <div className="App">
      <div>
      <Header />
      <Routes>
        <Route exact path ='/' element={<Main />} />
        <Route path = '/projects' element = {<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
        <Route path="/contact" element={<Contact URL={URL} />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
