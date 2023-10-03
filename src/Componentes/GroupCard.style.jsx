import styled from "styled-components";

export const GroupCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:  ${(prop) => prop.justify ? prop.justify :'center'};
    align-items: center;
    gap: 37px;
    padding-bottom: 30px;

`;