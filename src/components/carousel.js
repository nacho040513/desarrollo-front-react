import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

export default class Carouse extends React.Component{
    render(){
        return(
            <div className="carusel">
        <Carousel>
        <Carousel.Item>
        <img 
        className="d-block w-100"
        src={process.env.PUBLIC_URL + 'images/slide1.jpg'}
        alt="First slide"/>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
        className="d-block w-100"
        src={process.env.PUBLIC_URL + 'images/slide2.jpg'}
        alt="First slide"/>

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img 
        className="d-block w-100"
        src={process.env.PUBLIC_URL + 'images/slide3.jpg'}
        alt="First slide"/>

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
  );
    }
        }
