import React from 'react'
import styled from 'styled-components';
import Avater from '../img/Avater.PNG'
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={Avater} alt="resume imgage" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I'a <span>Front-end</span></h4>
                </div>
                <p className="paragraphy">
                    My name is Theppakorn I'm junior Front-End-Developer located in Thailand. I enjoy creating things that live on the internet.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>My Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Mr.Theppakorn Pongteedee</p>
                        <p>: 24</p>
                        <p>: Thai</p>
                        <p>: Thai / English</p>
                        <p>: Samut Prakan, Thailand</p>
                        <p>: Front-end Web Developer </p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    )
}
const ImageSectionStyled = styled.div`
display: flex;
margin-top: 5rem;
.left-content {
    width: 100%;
    img {
        width: 90%;
        object-fit: cover;
    }
}
.right-content {
    h4 {
        font-size: 2rem;
        color: var(--white-color);
        span {
            font-size: 2rem;

        }
    }
    .paragraphy {
        padding: 1rem 0;
    }
    .about-info {
        display: flex;
        .info-title {
            padding-right: 3rem;
            p{
                font-weight: 600;
            }
        }
        .info-title, .info {
            padding: 2.2rem 0;
            p {
                padding: 0.3rem 0;
            }
            
        }
    }
}

@media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
        margin-bottom: 1rem;
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
@media screen and (max-width: 450px) {
    .right-content {
        p {
            font-size: 1rem;
        }
        .about-info {
            .info-title {
                p {
                    font-size: 1rem;
                }
            }
        }
        .info {
            p {
                font-size: 1rem
            }
        }
    } 
}
@media screen and (max-width: 400px) {
    .right-content {
        p {
            font-size: 0.85rem;
        }
        .about-info {
            .info-title {
                p {
                    font-size: 0.85rem;
                }
            }
        }
        .info {
            p {
                font-size: 0.85rem
            }
        }
    } 
}

`;

export default ImageSection;
