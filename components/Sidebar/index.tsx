import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { closedSidebar } from "../../redux/toggleSidebarSlice";
import { RootState } from "../../redux/store";

import { ICart } from "../../interface/ICart";
import CartProduct from "../CartProduct";

import {
  SidebarContainer,
  HeaderSidebar,
  ButtonClosedStyled,
  FooterSidebar,
  TextTotalPrice,
  ButtonFinish,
} from "./SidebarStyled";


function Sidbar() {
  const [productsInLs, setProductsInLs] = useState<ICart[]>([]);

  const dispatch = useDispatch();
  const isOpened: boolean = useSelector((state: RootState) => state.toggleSidebar.value );
  const products = useSelector((state: RootState) => state.productCart);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")!) || [];
    setProductsInLs([...cart]);
  }, [products])

  return (
    <SidebarContainer isOpened={isOpened}>
      <HeaderSidebar>
        <p>Carinho de compras</p>
        <ButtonClosedStyled onClick={() => dispatch(closedSidebar())}>
          <span>X</span>
        </ButtonClosedStyled>
      </HeaderSidebar>
      <main>
        { productsInLs.length === 0 ? (<p>Sem Produtos.</p>) :
          productsInLs.map((product) => (
            <CartProduct key={ product.id } product={ product } />
          ))
        }
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
