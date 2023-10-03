import styled from "styled-components";

import bolinha from '../img/bolinhas.svg'
import overlay from '../img/plano.svg'

const img = ({ img , cor}) => {
  switch (img) {
    case 'bolinha':
      return bolinha ;

    case 'branco':
      return overlay;

    default:
      return "none"
  }
}


export const Wrapper = styled.div`
  background-color: ${(prop)=> prop.cor?prop.cor:'#000000'};
  background-image: url(${img});
  background-size: contain;
    padding: 0px 30px 0px;
    
 `;