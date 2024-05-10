import React from 'react';
import { Header, HeaderContainer, Button, Logo, SearchContainer, Input, ButtonUser, ButtonCart, ButtonContainer } from './NavbarStyled';
import { AiOutlineAppstore, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <Header>
        <HeaderContainer>

            <Logo href='/'>Майстер</Logo>
            <Button type='button'>
                <AiOutlineAppstore />
                Каталог
            </Button>
            <SearchContainer>
              <Input/>
              <AiOutlineSearch/>
            </SearchContainer>  
          <ButtonContainer>
            <ButtonUser>
              <AiOutlineUser/>
            </ButtonUser>
            <ButtonCart>
              <AiOutlineShoppingCart/>
            </ButtonCart>
          </ButtonContainer>
        </HeaderContainer>
    </Header>
  )
}

export default Navbar
