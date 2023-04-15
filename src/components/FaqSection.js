import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="question">
            <div className="answer">
              <p>
                To get started, simply sign up for a membership plan and attend
                your first class! Our experienced trainers will guide you
                through the process and provide personalized recommendations to
                help you achieve your fitness goals.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="question">
            <div className="answer">
              <p>
                Our daily schedule varies depending on the location and classes
                offered. Please check our website or contact us for more
                information.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="question">
            <div className="answer">
              <p>
                We accept various payment methods including credit card, debit
                card, and bank transfer. Please refer to our website for more
                information.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <div className="question">
            <div className="answer">
              <p>
                We offer a wide range of fitness products including supplements,
                apparel, and equipment. Please visit our website or contact us
                for more information.
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
    @media screen and (max-width: 768px) {
      padding: 0rem;
    }
  }
  @media (max-width: 1300px) {
    text-align: left;
  }
`;

export default FaqSection;
