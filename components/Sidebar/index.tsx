import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { closedSidebar } from "../../redux/toggleSidebarSlice";
import CartProduct from "../CartProduct";
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
  const dispatch = useDispatch();

  const isOpened: boolean = useSelector((state: RootState) => state.toggleSidebar.value );

  return (
    <SidebarContainer isOpened={isOpened}>
      <HeaderSidebar>
        <p>Carinho de compras</p>
        <ButtonClosedStyled onClick={() => dispatch(closedSidebar())}>
          <span>X</span>
        </ButtonClosedStyled>
      </HeaderSidebar>
      <main>
        <CartProduct />
      </main>
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
