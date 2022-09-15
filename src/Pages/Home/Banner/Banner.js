import React from 'react';
import { Carousel } from "react-bootstrap";
import {  Nav,  } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import banner1 from '../../../Assets/img/Banner/home-slide-1.jpg';
import banner2 from '../../../Assets/img/Banner/home-slide-2.jpg';
import banner3 from '../../../Assets/img/Banner/home-slide-3.jpg';
const Banner = () => {
    return (
        <div className="Banner">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner1}
              height="600px"
              alt="First slide"
            />
            <Carousel.Caption>
  

  
  
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner2}
              height="600px"
              alt="Second slide"
            />
  
            <Carousel.Caption>
            {/* <h1 className="text-center"> Birthday Party </h1> */}

             
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner3}
              height="600px"
              alt="Third slide"
            />
  
            <Carousel.Caption> 
        
            {/* <h1 className="text-center"> Wedding Party </h1> */}

             
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;