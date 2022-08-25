import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 23px;
  background: #0f52ba;
  width: 100vw;
  height: 48px;

  color: #ffffff;


  p {
    display: flex;
    column-gap: .5em;
    font-weight: 300;
    line-height: 19px;
    font-size: 16px;
    line-height: 19px;
  }
  
  span {
    font-weight: 600;
    font-size: 32px;
  }

`
export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  
  height: 26px;
  width: 52px;
  border-radius: 8px;
  background: #ffff;
  border: #fff;

  color: #000000;
  font-weight: 700;
  font-size: 12px;
`