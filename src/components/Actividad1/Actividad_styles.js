import styled, { css } from "styled-components";
// eslint-disable-next-line
import Ilex from "../../App/variables";
// eslint-disable-next-line
import animations from "./Actividad_animations";

const mistyles = css`
  color: ${Ilex.color_grisMedio};
  .bloque-columnas {
    column-count: 4;
    column-gap: 3.5em;
    orphans: 0;
    widows: 0;

    li {
      margin: 0.5em 0.5em;

      &:first-child {
        margin: 0em 0;
      }
    }
  }
  .lista-preguntas {
    display: flex;
    //flex-direction: column;
    //align-items: stretch;
    //align-content: space-between;
    flex-wrap: wrap;
    height: 25.4em;
    li {
      list-style: none
      margin: 0.5em 0.5em;
      width: 10em;
    }
  }
  p{
    margin-top:1em;
    margin-right: 4em;
  }
  .check{
    margin-top: 0.5em;
    margin-left: 69.8em;
  }
`

export const DraggablesContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 0.4em 1em;
  text-align: center;
`;

export const AreasContainer = styled(DraggablesContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressbarContainer = styled.div`
  width: 60%;
  margin: auto;
`;

export const UiButtonsContainer = styled.div`
  width: 6.5em;
  height: 3em;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: ${props => props.right || "1.6"}em;
  top: ${props => props.top || "1"}em;
`;

export default {
  mistyles,
  DraggablesContainer,
  AreasContainer,
  ProgressbarContainer
};
