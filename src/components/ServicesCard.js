import React from 'react';
import styled from 'styled-components';

function ServicesCard({ image, title, paragraph }) {
    return (
        <ServicesCardStyled>
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServicesCardStyled>
    )
}

const ServicesCardStyled = styled.div`
background-color: var(--background-dark-grey);
border-left: 2px solid var(--border-color);
border-right: 2px solid var(--border-color);
border-top: 6px solid var(--border-color);
border-bottom: 2px solid var(--border-color);
transition: 0.3s all ease-in-out;
&:hover{
    border-top: 7px solid var(--primary-color);
    transform: scale(1.025);
}
.container {
    padding: 1rem;
    h4{
        color: var(--white-color);
        font-size: 1.5rem;
        padding: 1rem 0;
        position: relative;
        padding-bottom: 1rem;
        &::after{
            content: "";
            width: 4rem;
            background-color: var(--border-color);
            height: 3px;
            position: absolute;
            left: 0;
            bottom: 0;
            border-radius: 10px;
        }
    }
    p {
        padding: .7rem 0;
    }
}

`;

export default ServicesCard;
