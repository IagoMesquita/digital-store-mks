import Image from 'next/image';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { openSidebar } from '../../redux/toggleSidebarSlice';
import { HeaderWrapper, ButtonCart } from './HeaderStyled';
function Header() {
  const dispatch = useDispatch()
  
  const product = useSelector((state: RootState) => state.productCart)

  return (
    <HeaderWrapper>
      <p>
        <span>MKS</span>Sistemas
      </p>
      <ButtonCart onClick={ () => dispatch(openSidebar()) }>
        <Image src='/Vector.svg' height={10.4} width={10.98} alt='carrinho-de-compra'/>
        { product.length }
      </ButtonCart>
    </HeaderWrapper>
  )
}

export default Header;

