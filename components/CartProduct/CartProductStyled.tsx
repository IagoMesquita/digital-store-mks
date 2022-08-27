import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .5em;

  width: 250px;
  height: 250px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding: 1em;

  margin: 0 auto;

  .image {
    display: flex;
    justify-content: center;
    align-items: c;
  }

  .text-name {
    display: flex;
    justify-content: center;
    column-gap: .3em;

    font-weight: 400;
    font-size: 16px;
    color: #2c2c2c;
  }

  .container-qtd-price {
    display: flex;
    justify-content: space-between;

  }

  .container-qtd-price p {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 84px;
    height: 34.81px;
    background: #373737;
    border-radius: 5px;

    font-weight: 700;
    font-size: 15px;
    color: #ffff;
  }
 
`


