import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Question layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>
        {title}
        <FontAwesomeIcon size="1x" icon={faCaretDown} style={{ marginLeft: "1.5rem" }} />
      </motion.h4>
      {toggle ? children : ''}

    </Question>
  );
}

const Question = styled(motion.div)`
  h4 {
    cursor: pointer;
    padding: 1.5rem 0;
    &:hover {
      background: white;
      color: black;
    }
  }
`;

export default Toggle;