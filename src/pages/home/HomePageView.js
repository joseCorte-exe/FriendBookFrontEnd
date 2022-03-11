import styled from "styled-components";

export const HomePageView = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    padding-inline: 10rem;
  }

  button {
    width: 12rem;
    height: 3rem;

    border-style: none;

    margin-top: 2rem;
    margin-bottom: 4rem;

    :hover {
      border-radius: 70px;
      cursor: pointer;
    }
  }

  h2 {
    width: 55rem;

    border-bottom: 1px solid #999999;

    margin-bottom: 2rem;
  }

  article {
    display: flex;
  }
`;