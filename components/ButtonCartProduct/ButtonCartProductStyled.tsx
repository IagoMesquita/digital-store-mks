import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;

  height: 34.5px;
  width: 97.37px;
  
  background: #FFFFFF;
  border: 0.3px solid #BFBFBF;
  border-radius: 4px;

  input {
    width: 100%;
    border: none;
    outline: 0;
    text-align: center;
  }

  //retirar setas do input number
  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

  }

  button {
    border: none;
    background: #FFFFFF;
    width: 32.37px;
    height: 26.11px;
    font-weight: 400;
    font-size: 22px;
  }
  
  .btn-add {
    border-left: solid #bfbfbf 0.2px;
  }

  .btn-dec {
    border-right: solid #bfbfbf 0.2px;
  }
`