import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: "#fff" }}>
      <Title>
        <Hide>
          <motion.h2>Get in touch</motion.h2>
          <h5>Drop a message if you have any queries or any advices you’d like to share. We are more than happy to help.</h5>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social>
            <h4>Name</h4>
            <FullName>
              <FirstName>
                <input type="text" />
                <h5>First Name</h5>
              </FirstName>
              <div>
                <input type="text" />
                <h5>Last Name</h5>
              </div>
            </FullName>
          </Social>
        </Hide>
        <Hide>
          <Social>
            <h4>Email</h4>
            <input type="text" />
          </Social>
        </Hide>
        <Hide>
          <Social>
            <h4>Message</h4>
            <textarea type="text" />
          </Social>
        </Hide>
        <button>SUBMIT</button>
      </div>
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  width: 50%;
  margin: auto;
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  button {
    font-size: 1rem;
    font-weight: normal;
    border: none;
    padding: 1rem 3rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    &:hover {
      background-color: #1b1b1b;
      color: white;
    }
  }
  @media (max-width: 1500px) {
    width: 100%;
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  h5 {
    margin-top: 1rem;
  }
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Social = styled(motion.form)`
  display: block;
  align-items: center;
  margin-bottom: 2rem;
  h4 {
    font-weight: normal;
  }
  p {
    padding: 0rem;
    color: black;
  }
  input {
    width: 100%;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.5rem 0rem;
    background-color: #FAFAFA;
    border-width: thin;
  }
  input:focus {
    background-color: white;
  }
  textarea {
    width: 100%;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.5rem 0rem;
    background-color: #FAFAFA;
    border-width: thin;
    height: 200px;
    resize: vertical;
  }
  textarea:focus {
    background-color: white;
  }
`;
const FullName = styled.div`
  display: flex;
`;
const FirstName = styled.div`
  margin-right: 1rem;
`;

export default ContactUs;