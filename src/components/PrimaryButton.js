import React from 'react'
import styled from 'styled-components';

function PrimaryButton({ title }) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.div`
background-color: var(--primary-color);
padding: 1rem 2.5rem;
color: white;
cursor: pointer;
display: inline-block;
position: relative;
font-size: inherit;
transition: 0.3s all ease-in-out;
&::after {
    content: "";
    position: absolute;
    width: 0;
    height: 7%;
    transition: 0.3s all ease-in-out;
    left: 0;
    bottom: 0;
}
&:hover::after{
    width: 100%;
    background-color: crimson;
   
}

@media screen and (max-width: 530px) {
    padding: .5rem 1.5rem;
    font-size: 1rem;
 
}

`;

export default PrimaryButton;
