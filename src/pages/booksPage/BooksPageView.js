import styled from "styled-components";

export const BooksPageView = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  p {
    margin-bottom: 2rem;
  }

  .actionMenu {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;

    max-width: 100%;
    
    flex-direction: column;

    margin-left: 12.5rem;
    margin-top: 2rem;
    margin-bottom: 5rem;

    label {
      margin-bottom: 10px;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    
    flex-wrap: wrap;
  }
`;
