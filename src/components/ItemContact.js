import React from 'react'
import styled from 'styled-components';

function ItemContact({ icon, title, contact }) {
    return (
        <ItemContactStyled>
            <div className="left-content">

                {icon}

            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact}</p>
            </div>

        </ItemContactStyled>
    )
}

const ItemContactStyled = styled.div`
padding: 1.5rem 2rem;
background-color: var(--background-dark-grey);
display: flex;
align-items: center;
&:not(:last-child) {
    margin-bottom: 2.5rem;
}
.left-content {
    padding: 2rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    svg {
        font-size: 3rem;
    }
}
.right-content {
    h6 {
        color: var(--white-color);
        font-size: 1.5rem;
        padding-bottom: .6rem
    }
    p {
        padding: 0.1rem 0;

    }
}
`;

export default ItemContact;
