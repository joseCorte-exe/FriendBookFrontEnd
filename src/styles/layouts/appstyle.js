import styled from "styled-components";

export const AppView = styled.main`
    header {
        display: flex;

        align-items: center;
        justify-content: space-around;

        width: 100%;
        height: 4rem;

        border-bottom: 1px solid black;

        section {
            label {
                margin-right: 3rem;
            }
        }
    }
`;
