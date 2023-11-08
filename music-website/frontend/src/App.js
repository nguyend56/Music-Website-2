import "./App.css";
import Logo from "./components/Logo";
import Singles from "./pages/Singles.jsx"
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Piano from "./pages/Piano";
import MenuBar from "./components/MenuBar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Logo />
      <MenuBar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/singles' element={<Singles/>}/>
        <Route path='/piano' element={<Piano/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
