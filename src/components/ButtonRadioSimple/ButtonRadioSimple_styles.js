import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
display: block;
position: relative;

.container {
  position: relative;
  font-size: 12px;
  cursor: pointer;
  height: auto;
  margin-left: 0.5em;
  margin-top: 1.8em;
  left: 0;
  display: flex;
  position: relative;
  max-width: 15em;
    input {
        opacity:0;
        position: absolute;
    }
    .checkmark::before{
        content: '';
        width:1em;
        height:1em;
        border-radius:100%;
        display: block;
        border: 0.2em solid ${Ilex.color_rosa_radios};
        position: absolute;
        top:0;
    }
    input:checked ~ .checkmark::after{
        content:'';
        width:1em;
        height:1em;
        border-radius:100%;
        display: block;
        border: 0.2em solid #fff;
        background-color: ${Ilex.color_rosa_radios};
        position: absolute;
        top:0;
        left:0;
        transform: scale(0.8)
    }
  
  
}
.container input {
  cursor: pointer;
  position: absolute;
  margin-top: 0.8em;
}
.checkmark {
  margin-left: -0.5em;
  line-height: 1;
  text-align: center;
  display: inline-block;
  width: auto;
  padding: 0.5em;
  color: ${Ilex.texto};
  
}
.text{
  margin-left: 1em;
}


/* When the radio button is checked, add a blue background */

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
}
`

export default styles
    