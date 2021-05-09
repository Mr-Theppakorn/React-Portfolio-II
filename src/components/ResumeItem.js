import React from 'react';
import styled from 'styled-components';

function ResumeItem({ year, title, subtitle, text }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subtitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
display: flex;
padding-bottom: 3rem;
&:not(:last-child){
        padding-bottom: 3rem;
    }
.left-content {
    width: 30%;
    padding-left: 20px;
    position: relative;
    &::before {
        content:"";
        position: absolute;
        left: -10px;
        top: 5px;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        border: 2px solid var(--border-color);
        background-color: var(--background-dark-color);
    }
    p {
    display: inline-block;
    }
}
.right-content {
    padding-left: 5rem;
    position: relative;
    &::before{
        content:"";
        position: absolute;
        left: 0;
        top: 15px;
        height: 2px;
        width: 3rem;
        background-color: var(--border-color);
    }
    h5 {
        color: var(--primary-color);
        font-size: 2rem;
        padding-bottom: .5rem
    }
    h6 {
        padding-bottom: .5rem
    }
}

@media screen and (max-width: 570px) {
    .right-content {
        p {
            font-size: 1.1rem;
        }
        .about-info {
            .info-title {
                p {
                    font-size: 1.1rem;
                }
            }
        }
        .info {
            p {
                font-size: 1.1rem
            }
        }
    } 
}
`;

export default ResumeItem;
