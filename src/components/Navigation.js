import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avater from '../img/Avater.PNG';

function Navigation() {
    return (
        <NavigationStyled>
            <div className="avater">
                <img src={avater} alt="" />
            </div>
            <ul className="nav-item">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active-class" exact>Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class" exact>Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 My Portfolio</p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
border-right: 3px solid var(--border-color);

.avater {
    width: 80%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 2rem 0;
    img {
        width: 100%;
        border-radius: 50%;
        border: 7px solid var(--border-color);
    }
}

.nav-item {
    width: 100%;
    text-align: center;
    .active-class {
        background-color: var(--primary-color);
    }
    li{
        display: block;
        a {
            display: block;
            padding: 0.5rem 0;
            position: relative;
            font-weight: 700;
            z-index: 10;
            text-transform: uppercase;
            transition: 0.3s all ease-in-out;
            letter-spacing: 1px;
            &:hover {
                cursor: pointer;
            }
            &::before {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 50%;
                transition: 0.3s all cubic-bezier(1, 1, 0.2, 1);
                background-color: crimson;
                opacity: 0.20;
            }
        }
        a:hover::before {
            width: 100%;
            height: 100%;
        }
    }
    
}

.footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
        display: block;
        padding: 1rem 0;
        font-size: 1.2rem;
        text-align: center;
    }
}

`;

export default Navigation;
