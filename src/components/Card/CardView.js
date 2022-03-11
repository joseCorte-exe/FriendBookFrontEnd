import styled from "styled-components";

export const CardView = styled.article`
    display: flex;

    flex-direction: column;

    margin-right: 1.5rem;

    img {
        width: ${props => `${props.width}rem`};
        height: ${props => `${props.height}rem`};
    }
`;
