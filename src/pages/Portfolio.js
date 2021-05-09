import React, { useState } from 'react';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layouts';
import project from '../data/project';
import Menu from '../components/Menu';
import Category from '../components/Category';

const allCategory = ['All', ...new Set(project.map(item => item.category))]

function Portfolio() {
    const [menuItem, setMenuItem] = useState(project);
    const [onCategory, setOnCategory] = useState(allCategory);

    const filter = (onCategory) => {
        if (onCategory === 'All') {
            setMenuItem(project);
            return
        }

        const filterData = project.filter(item => item.category === onCategory);
        setMenuItem(filterData);
    }
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'Portfolios'} />
            <InnerLayout>
                <Category filter={filter} onCategory={onCategory} />
                <Menu menuItem={menuItem} />


            </InnerLayout>
        </MainLayout>
    )
}

export default Portfolio;
