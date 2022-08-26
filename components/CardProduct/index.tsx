import Image from 'next/image';
import React from 'react';
import formatCurrency from '../../utils/formartCurrency';
import { IProduct } from '../../interface/IProduct';
import { CardContainer, ButtonCard, PriceStyle, InfoProductStyled, TextNames } from './CardProductStyled';
// import { ButtonCard } from './ButtonCardStyled';
// import { PriceStyle } from './PriceStyled';
// import { InfoProductStyled } from './InfoProductStyled';
// import { TextNames } from './TextNamesStyled';

interface ProductProp {
  product: IProduct;
}

function CardProduct({ product }: ProductProp) {

  const addProduct = () => {
    console.log(product.name)
  }

  return (
    <CardContainer>
      <div>
        <Image style={ { margin: '0 auto' } } src={product.photo} alt={product.description} width={127.8} height={158.89}/>
        <InfoProductStyled>
          <TextNames>
            <p>{`${product.brand} ${product.name}`}</p>
          </TextNames>
          <PriceStyle>
            <span>R$</span>
            { formatCurrency(Number(product.price)) }
          </PriceStyle>
        </InfoProductStyled>
        <p>{product.description}</p>
      </div>
      <ButtonCard onClick={ addProduct } >
        comprar
      </ButtonCard>
    </CardContainer>
  )
}

export default CardProduct;