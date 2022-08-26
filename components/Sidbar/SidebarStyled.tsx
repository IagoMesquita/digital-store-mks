import styled from "styled-components";

export const SidebarContainer = styled.aside<{ isOpened: boolean }>`
  height: 100vh;
  width: ${(props) => (props.isOpened ? "330px" : "0vw")};;
  background: #0F52BA;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
`

export const HeaderSidebar = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    text-align: left;
    color: #ffffff;
    font-weight: 700;
    font-size: 27px;
  }
`
export const ButtonClosedStyled = styled.div`
  background: #000000;  
  height: 45.92px;
  width: 45.92px;
  border-radius: 100%;

  span {
    color: #0F52BA;
    font-weight: 400;
    font-size: 44px;
    text-align: center;
  }
`

export const FooterSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  width: 100%;


  position: absolute;
  bottom: 0;
`

export const TextTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 98px;

  color: #ffff;
  font-weight: 700;
  font-size: 28px;
`

export const ButtonFinish = styled.button`
  background: #000000;
  height: 65.86px;

  color: #ffff;
  font-weight: bold;
  font-size: 20px;
  border: none;
`