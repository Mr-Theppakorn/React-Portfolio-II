import React from 'react';
import styled from 'styled-components';
import ItemContact from '../components/ItemContact';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layouts';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

function Contact() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactStyled>
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h2>Contact Me</h2>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name" >Enter your name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" >Enter your email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" >Enter your subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="textarea" >Enter your message</label>
                                <textarea type="text" id="textarea" />
                            </div>
                            <div className="form-field">
                                <PrimaryButton title={'Send Email'} />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ItemContact icon={phone} title={'Phone'} contact={'095-5279644'} />
                        <ItemContact icon={email} title={'Email'} contact={'mister-theppakorn@outlook.com'} />
                        <ItemContact icon={location} title={'Location'} contact={'Samut Prakan, Thailand'} />
                    </div>
                </InnerLayout>
            </ContactStyled>
        </MainLayout>
    )
}

const ContactStyled = styled.section`
.contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    .right-content {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .contact-title {
        h2{
            color: var(--white-color);
            font-size: 2rem;
        }
    }
    .form {
        width: 100%;
        @media screen and (max-width: 500px) {
        width: 70%;
}

        .form-field {
            margin-top: 2rem;
            position: relative;
            width: 100%;
            label {
                position: absolute;
                left: 20px;
                top: -20px;
                display: inline-block;
                background-color: var(--background-dark-color);
                color: inherit;
            }
            input {
                border: 1px solid var(--border-color);
                outline: none;
                background: transparent;
                height: 50px;
                padding: 0 15px;
                width: 100%;
                color: inherit;
            }
            textarea {
                background: transparent;
                border: 1px solid var(--border-color);
                outline: none;
                padding: 0.8rem 1rem;
                height: 200px;
                width: 100%;
                color: inherit;
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    .contact-section {
    grid-template-columns: repeat(1, 1fr);
    .left-content {
        margin-bottom: 2rem;
    }
    }
}



`;

export default Contact;
