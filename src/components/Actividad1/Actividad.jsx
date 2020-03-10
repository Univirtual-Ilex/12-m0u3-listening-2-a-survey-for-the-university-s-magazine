import React from "react";
//Components
import Container from "../Container";
import MainTitle from "../MainTitle";
import ButtonUi from "../ButtonControlUI";
import ButtonCheck from "../ButtonCheck";
import PreguntaRadio from "../PreguntaRadio/PreguntaRadio";
import { ICol, IRow } from "../Grid";
import PersonaHover from "../PersonaHover";
// Styles
import styled from "styled-components";
import styles, { UiButtonsContainer } from "./Actividad_styles";
import Ilex from "../../App/variables";

// Data
import data from "./Actividad_data";

const Actividad_base = ({ ...props }) => {
  return (
    <Container bgImage="./src/bg_actividad1.png" h={60} {...props}>
      <UiButtonsContainer>
        <ButtonUi
          icon="ilx-ayuda"
          tooltip="After reading, answer which of the following answers to the questions is correct"
        />
        <ButtonUi icon="ilx-volver" tooltip="Start Again" />
      </UiButtonsContainer>
      <IRow pt={2}>
        <ICol pt={2} pb={0.5}>
          <MainTitle color={Ilex.violeta2} size={1.5}>
            LISTEN TO A MAN ASKING SOME QUESTIONS TO A WOMAN. SELECT THE PROPER
            ANSWERS YOU LISTEN TO
          </MainTitle>
        </ICol>
      </IRow>
      <IRow justify="center" gutters={1}>
        <IRow w={85} align="center" py="0.5">
          <ICol>
            <ul className="lista-preguntas">
              {data.map(pregunta => {
                return (
                  <li key={pregunta.id}>
                    <PreguntaRadio
                      pregunta={pregunta.pregunta}
                      opciones={pregunta.respuestas}
                      correcta={pregunta.correcta}
                    />
                  </li>
                );
              })}
            </ul>
          </ICol>
        </IRow>

        <IRow>
          <ICol pt={1}>
            <ButtonCheck />
          </ICol>
        </IRow>
      </IRow>
    </Container>
  );
};

const Actividad = styled(Actividad_base)`
  ${styles.mistyles}
`;

export default Actividad;
