import React from "react";
import Image from "next/image";

import ButtonCartProduc from "../ButtonCartProduct";

import { CartContainer } from "./CartProductStyled";
import { IProduct } from "../../interface/IProduct";
import formatCurrency from "../../utils/formartCurrency";

interface ProductProps {
  product: IProduct;
}

function CartProduct({ product }: ProductProps) {
  return (
    <>
      <CartContainer>
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
          <ButtonCartProduc product={product} />
          <p>
            <span>R$</span>
            {formatCurrency(Number(product.price))}
          </p>
        </div>
      </CartContainer>
    </>
  );
}

export default CartProduct;
