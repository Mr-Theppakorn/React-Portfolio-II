import React from 'react';
import styled from 'styled-components';

function Menu({ menuItem }) {
    return (
        <MenuStyled>
            { menuItem.map((item) => {
                return (<div key={item.id} className="grid-item">
                    <div className="portfolio-content">
                        <div className="portfolio-image">
                            <img src={item.image} alt="" />
                        </div>
                        <a href={item.link} >{item.title}</a>
                    </div>
                </div>
                )
            }
            )}

        </MenuStyled>
    )
}

const MenuStyled = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 2rem;
.grid-item {
    .portfolio-content {
        display: block;
        position: relative;
        img {
            width: 100%;
            transition: 0.3s all ease;
            &:hover{
                transform: scale(1.05);
            }
        }
        a {
            font-size: 2rem;
            color: var(--white-color);

        }
        
    }
}

@media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
}


`;

export default Menu;
