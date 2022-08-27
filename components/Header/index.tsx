import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ICart } from '../../interface/ICart';
import { RootState } from '../../redux/store';
import { openSidebar } from '../../redux/toggleSidebarSlice';
import { HeaderWrapper, ButtonCart } from './HeaderStyled';
function Header() {
  const dispatch = useDispatch()
  const productsRedux = useSelector((state: RootState) => state.productCart)

  const [totalInCart, setTotalInCart] = useState(0)
  
  useEffect(() => {
    const productsLs: ICart[] = JSON.parse(localStorage.getItem("cart")!) || [];
    const totalProducts = productsLs.reduce((acc, curr) =>  acc + curr.qtd ,0)

    setTotalInCart(totalProducts)
  }, [productsRedux]);
  
  return (
    <HeaderWrapper>
      <p>
        <span>MKS</span>Sistemas
      </p>
      <ButtonCart onClick={ () => dispatch(openSidebar()) }>
        <Image src='/Vector.svg' height={10.4} width={10.98} alt='carrinho-de-compra'/>
        { totalInCart }
      </ButtonCart>
    </HeaderWrapper>
  )
}

export default Header;

