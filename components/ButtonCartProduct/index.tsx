import React, { useState, useContext, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { ICart } from "../../interface/ICart";
import { IProduct } from "../../interface/IProduct";
import formatCurrency from "../../utils/formartCurrency";
import { ContainerButton } from "./ButtonCartProductStyled";
import { addQtdProduct } from "../../redux/productSlice"
interface ProductProp {
  product: IProduct;
}

function ButtonCardProduc({ product }: ProductProp) {

  const dispatch = useDispatch();

  const { id } = product;
  const [countProduct, setCountProduct] = useState({ un: 1 });

  // Preço Total:
  // useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem('cart')!) || [];
  //   if (cart.length) {
  //     const totalValue = cart.map((prod: ICart) => Number(prod.price) * prod.qtd)
  //       .reduce((acc:number, price: number ) => acc + price, 0);

  //     setCartTotalValue(formatCurrency(totalValue));
  //   } else {
  //     setCartTotalValue('R$ 0,00');
  //   }
  // }, []);

  const removeProduct = () => {
    if (countProduct.un >= 1) {
      const cart = JSON.parse(localStorage.getItem("cart")!) || [];
      setCountProduct({ ...countProduct, un: countProduct.un - 1 });
      cart.forEach((prod: ICart) => {
        if (prod.id === id) {
          prod.qtd -= 1;
        }
      });

      const filteredCartLs = cart.filter((prod: ICart) => prod.qtd >= 1 );
      localStorage.setItem("cart", JSON.stringify(filteredCartLs));

  


    }
  };

  const addProduct = () => {
    dispatch(addQtdProduct(id))
    const cart = JSON.parse(localStorage.getItem("cart")!) || [];

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

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleCoutProduct = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const cart = JSON.parse(localStorage.getItem("cart")!) || [];
    setCountProduct({ ...countProduct, un: Number(value) });
    const ifContained = cart.some((prod: IProduct) => prod.id === product.id);
    if (ifContained) {
      cart.forEach((prod: ICart) => {
        if (prod.id === id) {
          prod.qtd = Number(value);
        }
      });
    } else {
      cart.push({ ...product, qtd: value });
    }
    const filteredCart = cart.filter((prod: ICart) => prod.qtd !== 0);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };

  return (
    <ContainerButton>
      <button className="btn-dec" type="button" onClick={removeProduct}>
        -
      </button>
      <input
        value={countProduct.un}
        onChange={handleCoutProduct}
        type="number"
        min={0}
      />
      <button className="btn-add" type="button" onClick={addProduct}>
        +
      </button>
    </ContainerButton>
  );
}

export default ButtonCardProduc;
