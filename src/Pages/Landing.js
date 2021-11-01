import React from 'react';
import '../Styles/Landing.css';
import {
    Button,
    Carousel
} from 'react-bootstrap';

function Landing() {
    return (
        <div>
            <body>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="carousel-inner"
                            src="/image-43.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-inner"
                            src="/2077.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-inner"
                            src="/2077.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <h1 className="featured-text" style={{ fontSize: "medium", fontWeight: "bold" }}>
                    Featured Games
                </h1>
                <img src="/Group-46.png"></img>
                <img src="/Group-47.png"></img>
                <img src="/Group-48.png"></img>
                <img src="/Group-49.png"></img>
                <Button className="button-all-game" variant="outline-success" href="/">Show All Game</Button>
            </body>
        </div>
    );
}

export default Landing;