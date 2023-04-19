import styled from "styled-components";

// FILTRO DE BUSQUEDA Y ELIMINACION CONTACTS

//LABEL CONTACTS
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

//INPUT CONTACTS
export const Input = styled.input`
  width: 150px;
  margin-top: 7px;
  border-radius: 3px;
  border: 1px solid #cdcdcd;

  &:hover {
    border-radius: 5px;
    border: 2px solid #7dafe6;
  }
`;
