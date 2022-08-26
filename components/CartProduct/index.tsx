import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ButtonCartProduc from "../ButtonCartProduct";
import { CartContainer } from "./CartProductStyled";

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
            <Image
              src={product.photo}
              width={80}
              height={95}
              alt={product.name}
            />
            <div>
              <p>{product.name}</p>
              <p>{product.brand}</p>
            </div>
            <ButtonCartProduc product={product}/>
            <p>{product.price}</p>
          </CartContainer>
        ))
      )}
    </>
  );
}

export default CartProduct;
