import React, {useState} from "react";
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
import ButtonRadioSimple from '../ButtonRadioSimple'
// Data
import Data from "./Actividad_data";
import PreguntaTF from "../PreguntaTF"
const Actividad_base = ({staticContext, ...props }) => {



  const [modalFlag, setModal] = useState(false)
    const [passed, setPassed] = useState(false)

    const setChecked = (id, button) => {
        const data = Data[id]
        if(button === 0 && data.button1.score === 1){
            data.right = 1
        }else if(button === 1 && data.button2.score === 1){
            data.right = 1
        }else if(button === 2 && data.button3.score === 1){
            data.right = 1
        }else{
            data.right = 0
        }
    }

    const checkActivity = () => {
        var count = 0;
        var right = 0;
        Data.map((data) => {
            if(data.right === 1){
                count ++
                right ++
            }else{
                setPassed(false)
                count ++
            }

            if(right === Data.length){
                setPassed(true)
                setModal(true)
            }else if(count === Data.length){
                setModal(true)
            }
        })
    }

  const questions = Data.map((data,i) => {
        return(
            <ICol w={25} key={i} >
                <p > <strong >{i + 1}).</strong> {data.text}</p>
                <ButtonRadioSimple setCheckedState={setChecked} arrId={i} buttonId={0} nameb={'first_button1' + i} text={data.button1.text} className={"ml-1  " + 'first_button1' + i} />
                <ButtonRadioSimple setCheckedState={setChecked} arrId={i} buttonId={1} nameb={'first_button1' + i} text={data.button2.text} className={"ml-1  " + 'first_button1' + i} /> 
                <ButtonRadioSimple setCheckedState={setChecked} arrId={i} buttonId={2} nameb={'first_button1' + i} text={data.button3.text} className={"ml-1  " + 'first_button1' + i} /> 
            </ICol>
        )
    })
  return (
    <Container bgImage="./src/bg_actividad1.png" h={50} {...props}>
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
          {questions}
        </IRow>

        <IRow>
          <ICol >
            <ButtonCheck onClick={checkActivity} />
          </ICol>
        </IRow>
      </IRow>
      <PreguntaTF visibility={modalFlag}  answers={Data} passed={passed} repeatUrl={'/actividad1'} finished={passed} />
    </Container>
  );
};

const Actividad = styled(Actividad_base)`
  ${styles.mistyles}
`;

export default Actividad;
