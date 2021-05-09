import React from 'react'
import styled from 'styled-components';
import Title from '../components/Title';
import blogs from '../data/blogs';
import { InnerLayout, MainLayout } from '../styles/Layouts';

function Blogs() {
    return (
        <MainLayout>
            <BlogsStyled>
                <Title title={'Blogs'} span={'Blogs'} />
                <h1>Recommend</h1>
                <InnerLayout className={'blog'}>

                    {
                        blogs.map((blog) => {
                            return (
                                <div key={blog.id} className="blog-item" >
                                    <div className="image">
                                        <img src={blog.image} alt="" />
                                    </div>
                                    <div className="title">
                                        <a href={blog.link}>
                                            {blog.title}
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </InnerLayout>
            </BlogsStyled>
        </MainLayout >
    )
}

const BlogsStyled = styled.div`
.blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    .blog-item {
        background-color: var(--background-dark-grey);
        padding: 2rem 1rem;
        overflow: hidden;
        border-radius: 10px;
    }
    .image {
        width: 100%;
        padding-bottom: 0.5rem;
        img {
            width: 100%;
            height: 90%;
            object-fit: cover;
            border-radius: 10px;
            transition: 0.3s all ease;
            &:hover {
                cursor: pointer;
                transform: scale(1.05);
            }
        }
    }
    .title {
        a{
            font-size: 2rem;
            color: var(--white-color);
            cursor: pointer;
            transition: 0.3s all ease;
            &:hover {
                color: var(--primary-color);
            }
        }
    }

}

@media screen and (max-width: 800px) {
    h1 {
        font-size: 2.5rem;
    }
    .blog {
    grid-template-columns: repeat(1, 1fr);
}
}
`;

export default Blogs;
