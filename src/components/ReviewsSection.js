import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ReviewCard from "./ReviewCard";
import Title from "./Title";

function ReviewsSection() {
    return (
        <ReviewsStyled>
            <Title title={"Special"} span={"Special"} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewCard text={'“Websites should look good from the inside and out.”'} />
                    <ReviewCard text={'“Learning HTML and CSS is a lot more challenging than it used to be. Responsive web design adds more layers of complexity to design and develop websites.”'} />

                </div>

            </InnerLayout>
        </ReviewsStyled>
    );
}

const ReviewsStyled = styled.section`

.reviews {
    display: flex;

}

@media screen and (max-width: 1000px) {
    .reviews {
        flex-direction: column
    }

}
`;

export default ReviewsSection;
