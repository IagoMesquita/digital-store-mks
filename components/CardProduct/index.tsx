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
// import { RootState } from "../../redux/store";

interface ProductProp {
  product: IProduct;
}

type cart = string | null;

function CardProduct({ product }: ProductProp) {
  const { id } = product;
  const [countProduct, setCountProduct] = useState({ un: 0 });
  const dispatch = useDispatch();
  // const products = useSelector((state: RootState) => state.productCart)
   
  // const addProductLs = () => {
  //   const cart = JSON.parse(localStorage.getItem('cart') || '') || [];
  //   setCountProduct({ ...countProduct, un: countProduct.un + 1 });
  //   const ifContained = cart.some((prod: ICart) => prod.id === id);
  //   if (ifContained) {
  //     cart.forEach((prod: ICart) => {
  //       if (prod.id === id) {
  //         prod.qtd += 1;
  //       }
  //     });
  //     // localStorage.setItem('cart', JSON.stringify(cart));
  //   } else {
    // const cart: ICart[] = JSON.parse(localStorage.getItem('cart') || '') || [];
  //     cart.push({ ...product, qtd: countProduct.un + 1 });
  //     // localStorage.setItem('cart', JSON.stringify(cart));
  //   }
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // };


  // const addProductInCart = (e: ChangeEvent<HTMLInputElement>) => {
  const addProductInCart = () => {
    dispatch(addProduct(product));
    const cart: ICart[] = JSON.parse(localStorage.getItem('cart') || '') || [];
    console.log('get', cart)
    setCountProduct({ ...countProduct, un: countProduct.un + 1 });
    const ifContained = cart.some((prod: ICart) => prod.id === id);
    if (ifContained) {
      cart.forEach((prod: ICart) => {
        if (prod.id === id) {
          prod.qtd += 1;
        }
      });
      // localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      cart.push({ ...product, qtd: countProduct.un + 1 });
      // localStorage.setItem('cart', JSON.stringify(cart));
    }
    console.log('set', cart)
    localStorage.setItem('cart', JSON.stringify(cart));
    // addProductLs()
    // const { value } = e.target
    // console.log('ddd', value)

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
