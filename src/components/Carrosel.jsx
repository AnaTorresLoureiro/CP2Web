import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import TeslaIcon from '../assets/tesla.png';
import JeepIcon from '../assets/jeep.png';
import HondaIcon from '../assets/honda.png';
import PorscheIcon from '../assets/porsche.png';
import AudiIcon from '../assets/audi.png';

const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const BrandIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 4%;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const brandIcons = [
    { src: TeslaIcon, alt: 'tesla' },
    { src: JeepIcon, alt: 'jeep' },
    { src: HondaIcon, alt: 'honda' },
    { src: PorscheIcon, alt: 'porsche' },
    { src: AudiIcon, alt: 'audi' },
  ];

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {brandIcons.map((icon, index) => (
          <BrandIcon key={index}>
            <img src={icon.src} alt={icon.alt} />
          </BrandIcon>
        ))}
      </Slider>
    </CarouselContainer>
  );
}