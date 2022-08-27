import React from "react";
import Image from "next/image";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import ButtonCartProduc from "../ButtonCartProduct";

import { CartContainer } from "./CartProductStyled";
import formatCurrency from "../../utils/formartCurrency";

type Props = {};

function CartProduct({}: Props) {
  const products = useSelector((state: RootState) => state.productCart);
  return (
    <>
      {products.length === 0 ? (
        <p>Carrinho Vazio!</p>
      ) : (
        products.map((product) => (
          <CartContainer key={product.id}>
            <div className="image">
              <Image
                src={product.photo}
                width={80}
                height={95}
                alt={product.name}
              />
            </div>
            <div className="text-name">
              <p>{product.brand}</p>
              <p>{product.name}</p>
            </div>
            <div className="container-qtd-price">
              <ButtonCartProduc product={product}/>
              <p>
                <span>R$</span>
                {formatCurrency(Number(product.price))}
              </p>
            </div>
              
          </CartContainer>
        ))
      )}
    </>
  );
}

export default CartProduct;
