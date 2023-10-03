import styled from "styled-components";

export const Description = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-size: 19px;
    font-weight: 100;
    line-height: 1.4em;
    max-width: ${(prop) => prop.tamanho ? prop.tamanho : '600px'};
    padding: 15px 0px;
    color: ${(prop) => prop.cor ? prop.cor : '#000'};
    font-weight: 600;
`;