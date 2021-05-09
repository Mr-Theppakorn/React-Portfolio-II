import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import MiniTitle from './MiniTitle';
import Title from './Title';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';
import PrimaryButton from './PrimaryButton';

function ResumeCard() {
    const work = <WorkIcon />
    const school = <SchoolIcon />
    return (
        <ResumeCardStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className="mini-title">
                    <MiniTitle icon={work} title={'Working Experince'} />
                </div>
                <div className="resume-content">
                    <ResumeItem year={'Current'} title={'Front-end'} subtitle={'Free'} text={'Looking for job'} />
                    <ResumeItem year={'March 2019 - May 2019'} title={'INTERN'} subtitle={'Kaspa Pharmaceutical (Thailand) Co.,Ltd'} text={'IT Support'} />
                </div>
                <div className="mini-title">
                    <MiniTitle icon={school} title={'Education'} />
                </div>
                <div className="resume-content">
                    <ResumeItem year={'2015 - 2020'} title={'Computer Science'} subtitle={'Suan Sunandha Rajabhat University'} />
                    <ResumeItem year={'2012 - 2015'} title={'High School'} subtitle={'Pomnakarachsawatyanon School'} text={'Grade 10-12'} />
                    <ResumeItem year={'2003 - 2012'} title={'Elemantary School'} subtitle={'Pomprachunchomklao School'} text={'Grade 1-9'} />
                </div>
                <PrimaryButton title={'Download CV'} />
            </InnerLayout>
        </ResumeCardStyled>
    )
}

const ResumeCardStyled = styled.section`
.mini-title {
    padding-bottom: 2rem;
}

.resume-content {
    border-left: 1px solid var(--border-color)
}

@media screen and (max-width: 600px) {
    .resume-content {
        .right-content {
            h5 {
                font-size: 1.75rem;
            }
            h6, p {
                font-size: 1.1rem;
            }
        }

    }
}
@media screen and (max-width: 400px) {
    .resume-content {
        .left-content {
            p {
                font-size: 1rem;
            }
        }
        .right-content {
            h5 {
                font-size: 1.25rem;
            }
            h6, p {
                font-size: 0.85rem;
            }
        }

    }

}

`;

export default ResumeCard;
