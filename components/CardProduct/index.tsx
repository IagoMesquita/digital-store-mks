import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import formatCurrency from "../../utils/formartCurrency";
import { IProduct } from "../../interface/IProduct";
import { ICart } from "../../interface/ICart";
import {
  CardContainer,
  ButtonCard,
  PriceStyle,
  InfoProductStyled,
  TextNames,
  ImgContainer,
  Description,
} from "./CardProductStyled";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/productSlice";

interface ProductProp {
  product: IProduct;
}


function CardProduct({ product }: ProductProp) {
  const { id } = product;
  const [countProduct, setCountProduct] = useState({ un: 0 });
  const dispatch = useDispatch();

  
  const addProductLs = () => {
    const cart: ICart[] = JSON.parse(localStorage.getItem('cart')!) || [];
    setCountProduct({ ...countProduct, un: countProduct.un + 1 });
    const ifContained = cart.some((prod: ICart) => prod.id === id);
    if (ifContained) {
      cart.forEach((prod: ICart) => {
        if (prod.id === id) {
          prod.qtd += 1;
        }
      });
    } else {
      cart.push({ ...product, qtd: countProduct.un + 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };


  const addProductInCart = () => {
    dispatch(addProduct(product));
    addProductLs()
  };

  return (
    <CardContainer>
      <div>
        <ImgContainer>
          <Image
            src={product.photo}
            alt={product.description}
            width={127.8}
            height={158.89}
          />
        </ImgContainer>

        <InfoProductStyled>
          <TextNames>
            <p>{`${product.brand} ${product.name}`}</p>
          </TextNames>
          <PriceStyle>
            <span>R$</span>
            {formatCurrency(Number(product.price))}
          </PriceStyle>
        </InfoProductStyled>
        <Description>{product.description}</Description>
      </div>
      <ButtonCard  onClick={  addProductInCart }>comprar</ButtonCard>
    </CardContainer>
  );
}

export default CardProduct;
