import styled from "styled-components";

export const ButtonView = styled.button`
    width: 135px;
    height: 45px;

    background-color: ${props => `#${props.primary}`};

    border-radius: 22.5px;

    border-style: none;

    :hover {
        cursor: pointer;
        background-color: ${props => `#${props.hover}`};
    }

    :active {
        background-color: ${props => `#${props.active}`};

    }
`
