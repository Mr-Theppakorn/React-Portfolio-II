import React from 'react';
import styled from 'styled-components';

function Category({ filter, onCategory }) {
    return (
        <CategorysStyled>
            {
                onCategory.map((cat, i) => {
                    return <CategoryStyled key={i} onClick={() => filter(cat)}>
                        {cat}
                    </CategoryStyled>
                })

            }
        </CategorysStyled>
    )
}

const CategoryStyled = styled.button`
outline: none;
border: none;
background-color: var(--background-light-color-2);
padding: .5rem 2rem;
margin-bottom: 1rem;
font-size: inherit;
cursor: pointer;
color: var(--white-color);
transition: 0.3s all ease-in-out;
&:active, &:focus {
    background-color: crimson;
}
&:hover {
    background-color: var(--primary-color);
}
&:not(:last-child) {
    margin-right: 1rem;

}
`;

const CategorysStyled = styled.div`
margin-bottom: 2rem;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 70%;
margin: 2.4rem auto;
`;


export default Category;
