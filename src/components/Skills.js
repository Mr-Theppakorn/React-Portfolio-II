import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ProgressBar from './ProgressBar';
import Title from './Title';

function Skills() {
    return (
        <SkillsStyled>

            <Title title={'My Skills'} span={'My Skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar title={'Front-end'} width={'65%'} text={'65%'} />
                    <ProgressBar title={'HTML'} width={'75%'} text={'75%'} />
                    <ProgressBar title={'CSS'} width={'70%'} text={'70%'} />
                    <ProgressBar title={'JavaScript'} width={'60%'} text={'60%'} />
                    <ProgressBar title={'ReactJS'} width={'65%'} text={'65%'} />
                    <ProgressBar title={'VueJS'} width={'55%'} text={'55%'} />
                    <ProgressBar title={'Angular'} width={'1%'} text={'1%'} />
                    <ProgressBar title={'MySQL'} width={'25%'} text={'25%'} />
                    <ProgressBar title={'PHP'} width={'30%'} text={'30%'} />
                    <ProgressBar title={'Back-end'} width={'20%'} text={'20%'} />

                </div>
            </InnerLayout>

        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
.skills {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
}

@media screen and (max-width: 700px) {
    .skills {
    grid-template-columns: repeat(1, 1fr);

}

}
`;

export default Skills;
