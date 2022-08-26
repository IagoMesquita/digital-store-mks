import React, { useState } from "react";
// import useToggleSidebar from "../../hooks/useToggleSidebar";
import {
  SidebarContainer,
  HeaderSidebar,
  ButtonClosedStyled,
  FooterSidebar,
  TextTotalPrice,
  ButtonFinish,
} from "./SidebarStyled";

type Props = {};

function Sidbar({}: Props) {
  const [isOpened, setIsOpened] = useState(false);
  // const { isOpened, setIsOpened } = useToggleSidebar()

  return (
    <SidebarContainer isOpened={isOpened}>
      <HeaderSidebar>
        <p>Carinho de compras</p>
        <ButtonClosedStyled onClick={() => setIsOpened(!isOpened)}>
          <span>X</span>
        </ButtonClosedStyled>
      </HeaderSidebar>
      <FooterSidebar>
        <TextTotalPrice>
          <p>Total:</p>
          <p>R$999</p>
        </TextTotalPrice>
        <ButtonFinish>Finaizar Compra</ButtonFinish>
      </FooterSidebar>
    </SidebarContainer>
  );
}

export default Sidbar;
