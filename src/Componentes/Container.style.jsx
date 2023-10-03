import styled from "styled-components";

export const Container = styled.div`
padding: ${(prop) => prop.espacamento?prop.espacamento : '80px 30px'};
justify-content: space-between;
align-items: center;
max-width: 1200px;
margin: 0 auto;


`;
 
