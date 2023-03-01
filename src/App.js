import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Slider from "./components/Slider";
import banner from "./data/data.json";

function App() {
    return (
        <BrowserRouter>
            <PreNavbar />
            <Navbar />
            <Slider start={banner.start} />{" "}
        </BrowserRouter>
    );
}

export default App;
