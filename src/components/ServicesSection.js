import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ServicesCard from "./ServicesCard";
import Title from "./Title";
import design from "../img/design.svg";

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={"Services"} span={"services"} />
                <div className="services">
                    <ServicesCard
                        image={design}
                        title={"Skills"}
                        paragraph={
                            "HTML / CSS / JavaScript / Sass / StyledComponents / Git "
                        }
                    />

                    <ServicesCard
                        image={design}
                        title={"Libraries / Framework"}
                        paragraph={
                            "Material UI / Tailwind CSS / Bulma / Bootstrap / ReactJS / VueJS"
                        }
                    />

                    <ServicesCard
                        image={design}
                        title={"Roadmap"}
                        paragraph={
                            "TypeScript / React Native / Flutter / Angular / "
                        }
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout >
    );
}

const ServicesSectionStyled = styled.section`
.services {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3,1fr);
    justify-content: space-between;
    margin-top: 5rem;
}

@media screen and (max-width: 1000px) {
    .services {
        flex-direction: column;
        .mid-card {
        margin: 2rem 0;
    }
    }
}

`;

export default ServicesSection;
