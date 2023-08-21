import "./App.css";
import NavigationBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
