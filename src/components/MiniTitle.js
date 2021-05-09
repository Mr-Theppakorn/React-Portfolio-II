import React from 'react';
import styled from 'styled-components';

function MiniTitle({ icon, title }) {
    return (
        <MiniTitleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </MiniTitleStyled>
    )
}

const MiniTitleStyled = styled.div`
display: flex;
align-items: center;
p {
    padding-right: .5rem;
    svg {
        font-size: 2rem;
    }
}
h3 {
    color: var(--white-color);
    font-size: 2rem;
}
@media screen and (max-width: 600px) {
    h3 {
        font-size: 1.75rem
    }


}

@media screen and (max-width: 400px) {
    h3 {
        font-size: 1.25rem;
    }
}
`;

export default MiniTitle;
