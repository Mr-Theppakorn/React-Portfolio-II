import React from 'react'
import styled from 'styled-components';

function ReviewCard({ text }) {
    return (
        <ReviewCardStyled>
            <p>{text}</p>

        </ReviewCardStyled>
    )
}

const ReviewCardStyled = styled.div`
width: 50%;
padding: 2rem 1rem;
border-left: 6px solid var(--border-color);
background-color: var(--background-dark-grey);
position: relative;
margin-left: 2rem;

&::after{
    content: "";
    position: absolute;
    left: 2rem;
    border-width: .8rem;
    top: 100%;
    border-style: solid;
    border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
}
p{
    padding: 1rem 0;
}


@media screen and (max-width: 1000px) {
    width: 100%;
    margin: 2rem 0;
    margin-left: 0;
    left: 0;

}
`;

export default ReviewCard;
