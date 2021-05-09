import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Particle from '../components/Particles';

function Home() {
    return (
        <HomeStyled>
            <div className="particles-container">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi I'm<span>Theppakorn Pongteedee</span></h1>
                <p>Front-End-Developer</p>
                <div className="icons">
                    <a href="https://www.facebook.com/theppakorn.pongteedee/" className="icon i-facebook" target="_blank">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/Mr-Theppakorn" className="icon i-github" target="_blank">
                        <GithubIcon />
                    </a>
                    <a href="https://github.com/Mr-Theppakorn" className="icon i-instagram" traget="_blank">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </HomeStyled>
    )
}

const HomeStyled = styled.header`
width: 100%;
height: 100vh;
position: relative;
.typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    .icon {
        border: 2px solid var(--border-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s all ease;
        cursor: pointer;
        &:hover{
            color: var(--primary-color);
            border: 2px solid var(--primary-color);
        }
        &:not(:last-child){
            margin-right: 0.5rem;
        }
        svg {
            margin: 5px;
        }
        
    }
    
}
}

@media screen and (max-width: 600px) {
    .typography {
      h1,span {
          font-size: 3rem;
      }
      p{
          font-size: 1rem;
      }
    }
}

@media screen and (max-width: 450px) {
    .typography {
      h1,span {
          font-size: 2rem;
      }
    }
}

@media screen and (max-width: 360px) {
    .typography {
      h1,span {
          font-size: 1.8rem;
      }
    p {
        font-size: 0.85rem;

    }
}
}

`;

export default Home;
