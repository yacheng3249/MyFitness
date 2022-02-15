import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const carousel = useRef();
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  const [width, setWidth] = useState(0);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
    setMovie(currentMovie[0]);
  }, [movies, url]);

  useEffect(() => {
    if (carousel.current == undefined) {
      setWidth(0);
    } else {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [movie]);

  return (
    <>
      {movie && (
        <Detail variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Carousel ref={carousel}>
            <Awards drag="x" dragConstraints={{ right: 0, left: -width }}>
              {movie.awards.map((award) => (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              ))}
            </Awards>
            <CirclePages>
              <Circle style={{ background: "white" }} />
              <Circle />
              <Circle />
            </CirclePages>
          </Carousel>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Detail>
      )}
    </>
  );
}

const Detail = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }
  }
`;
const Awards = styled(motion.div)`
  min-height: 30vh;
  display: flex;
  align-items: center;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem;
  }
`;
const Carousel = styled(motion.div)`
  overflow: hidden;
  margin: 10rem 30rem;
  cursor: grab;
`;
const AwardStyle = styled.div`
  min-width: 30rem;
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    img {
      height: 50vh;
    }
  }
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  background: #353535;
  @media screen and (max-width: 768px) {
    width: 0.5rem;
    height: 0.5rem;
  }
`;
const CirclePages = styled.div`
  display: flex;
  justify-content: center;
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
}

export default MovieDetail;