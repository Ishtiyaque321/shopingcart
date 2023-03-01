import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";

function App() {
    return (
        <BrowserRouter>
            <PreNavbar />
            <Navbar />
            <Slider />
        </BrowserRouter>
    );
}

export default App;
