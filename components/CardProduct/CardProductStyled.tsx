import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 250.5px;
  height: 328px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  margin: 1.2em auto;
  
`

export const InfoProductStyled = styled.div`
  display: flex;
  /* justify-content: space-between; */
  padding: 0 .5em;
  border: solid 1px red;
  flex-wrap: wrap;

  border: solid 1px blue;
`

export const PriceStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 73.69px;
  height: 29.92px;
  background:#373737;
  border-radius: 5px;
  
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
`

export const TextNames = styled.div`
  /* display: flex;
  justify-content: start; */

  width: 124px;
  height: 38px;

  font-weight: 400;
  font-size: 16px;
  color: #2c2c2c;

  border: solid 1px red;

  p {
    margin-right: .2em;
    /* text-align: left; */

  }
`
export const ButtonCard = styled.button`
  background: #0F52BA;
  border-radius: 0px 0px 8px 8px;
  width: 100%;
  height: 36.74px;
  border: none;
  
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
`