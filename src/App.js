import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import data from "./data/data.json";
import ProductReview from "./components/ProductReview";
import Video from "./components/Video.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <BrowserRouter>
            <PreNavbar />
            <Navbar />
            <Slider start={data.banner.start} />
            <Offers offer={data.offer} />
            <Heading text="STAR PRODUCTS" />
            <StarProduct starProduct={data.starProduct} />
            <Heading text="HOT ACCESSORIES" />
            <HotAccessoriesMenu />
            <Heading text="PRODUCT REVIEWS" />
            <ProductReview productReviews={data.productReviews} />
            <Heading text="VIDEOS" />
            <Video videos={data.videos} />
            <Heading text="IN THE PRESS" />
            <Banner banner={data.banner} />\
            <Footer />
        </BrowserRouter>
    );
}

export default App;
