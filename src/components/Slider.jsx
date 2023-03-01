import { Carousel } from "bootstrap";
import React from "react";

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src="" alt="first slide" />

                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>nulla hoola </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
