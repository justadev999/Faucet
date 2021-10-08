import React from 'react'
import Logo from "../../Images/ethtutin_logo.png"
import {
    Nav,
    ImageWrapper,
    LogoImg
} from "./HeaderElements"

const Header = () => {
    return <Nav>
        <ImageWrapper>
            <LogoImg src={Logo} />
        </ImageWrapper>
    </Nav>
}

export default Header
