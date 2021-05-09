import styled from "styled-components";


export const MainLayout = styled.div`
padding: 5rem;

@media screen and (max-width: 700px) {
    padding: 4rem 3rem;
}
@media screen and (max-width: 500px) {
    padding: 3rem 2rem;
}
@media screen and (max-width: 450px) {
    padding: 3rem 1.5rem; 
}


`;

export const InnerLayout = styled.div`
padding: 5rem 0;



`;