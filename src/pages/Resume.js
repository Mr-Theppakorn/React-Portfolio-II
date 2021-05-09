import React from 'react'
import styled from 'styled-components';
import ResumeCard from '../components/ResumeCard';
import Skills from '../components/Skills';
import { MainLayout } from '../styles/Layouts';

function Resume() {
    return (
        <MainLayout>
            <Skills />
            <ResumeCard />
        </MainLayout>
    )
}

const ResumeStyled = styled.section`

`;

export default Resume;
