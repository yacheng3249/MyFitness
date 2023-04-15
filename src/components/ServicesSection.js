import React from "react";
//Import Icons
import banner11 from "../img/banner11.jpg";
import banner22 from "../img/banner22.jpg";
import banner33 from "../img/banner33.jpg";
import banner44 from "../img/banner44.jpg";
import t4 from "../img/t4.jpg";
//Style
import { About, Description, Image } from "../styles";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          Our Fitness
          <span> Programs</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={banner11} alt="icon" />
              <h3>BOOTCAMP</h3>
            </div>
            <p>Get fit with intensive training</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={banner22} alt="icon" />
              <h3>CROSSFIT</h3>
            </div>
            <p>Build strength and endurance with high-intensity workouts</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={banner33} alt="icon" />
              <h3>DANCE MOVES</h3>
            </div>
            <p>Learn to move and groove with different dance styles</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={banner44} alt="icon" />
              <h3>YOGA</h3>
            </div>
            <p>Relax and rejuvenate with yoga poses and meditation</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={t4} alt="athlete" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  margin-right: 1rem;
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    font-size: 1.5rem;
  }
  img {
    border-radius: 50%;
  }
`;

export default ServicesSection;
