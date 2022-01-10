import React from "react";
import wel from "../img/wel.jpg";
//Styled
import { About, Description, Image, Hide } from "../styles";
//Framer MOtion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Wanna <span>challenge</span> yourself?</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Here is the right place to become stronger, healthier and a more confident you.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} initial="hidden" animate="show" src={wel} alt="lady with a kettlebell" />
      </Image>
      <Wave />
    </About>
  );
}


export default AboutSection;