import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar({ menuMobile }) {
    return (
        <SidebarStyled className={`${menuMobile ? 'menu-toggle' : ''}`}>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
width: 16rem;
height: 100vh;
position: fixed;
background-color: var(--sidebar-dark-color);
overflow: hidden;
transition: 0.3s all ease-in-out;
@media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 999;
}

`;

export default Sidebar;
