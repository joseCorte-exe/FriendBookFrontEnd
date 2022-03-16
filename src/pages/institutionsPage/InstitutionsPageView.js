import styled from "styled-components";

export const InstitutionView = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  
  p {
    margin-bottom: 2rem;
  }

  .description {
    width: 70%;
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }

  .actionMenu {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-self: flex-start;



    max-width: 100%;
    
    flex-direction: column;

    margin-left: 12.5rem;
    margin-bottom: 5rem;

    label {
      margin-bottom: 10px;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
  }
`;
