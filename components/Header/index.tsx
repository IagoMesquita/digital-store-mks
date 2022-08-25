import Image from 'next/image';
import React from 'react'
import { HeaderWrapper, ButtonCart } from './HeaderStyled';
function Header() {
  return (
    <HeaderWrapper>
      <p>
        <span>MKS</span>Sistemas
      </p>
      <ButtonCart>
        <Image src='/Vector.svg' height={10.4} width={10.98} alt='carrinho-de-compra'/>
        99
      </ButtonCart>
    </HeaderWrapper>
  )
}

export default Header;

