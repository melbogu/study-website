import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CustomCarousel() {
    return (
        <div className='carousel'>
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/img/carousel1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h4>''Success is the sum of small efforts, repeated day in and day out.''</h4>
                    <p>―  Robert Collier, self-help author</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/img/carousel2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h5>''There are no secrets to success. It is the result of preparation, hard work, and learning from failure.''</h5>
                    <p>― General Colin Powell, former US Secretary of State</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/img/carousel3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h4>''However difficult life may seem, there is always something you can do and succeed at.''</h4>
                    <p>
                    ― Stephen Hawking
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}