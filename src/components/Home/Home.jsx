import React from "react";
import styled from "styled-components";
import Container from "../Container";
import { ButtonLink } from "../ButtonX";
import estilos_home from "./Home_styles";

const Home_base = function({ ...props }) {
  // se le pasan las props para recibir los styled components

  return (
    <Container {...props} row bgImage="src/bg.png">
      <div className="bloque-izquierdo">
        <div className="bloque-izquierdo-container">
          <h1>A Survey for the University’s Magazine </h1>
          <p>
            Listen to a man asking some questions to a woman. Select the proper
            answers you listen to. {}
            <span className="negrilla">
              <br/><br/>Time to practice your listening skill!
            </span>
          </p>
          <ButtonLink to="/actividad1">Start</ButtonLink>
        </div>
      </div>
      <div className="bloque-derecho">
        <figure>
          <img src="./src/cover.png" alt="Logo" />
        </figure>
      </div>
    </Container>
  );
};

const Home = styled(Home_base)`
  ${estilos_home}
`;

export default Home;
