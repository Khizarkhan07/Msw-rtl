import styled from 'styled-components';

export const InitialUiStyled = styled.main`
    background-image: url(${process.env.PUBLIC_URL}/images/background/background-image-blue.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;

    .public-app-wrapper {
        display: grid;
        grid-row-gap: 40px;
    }
`;
