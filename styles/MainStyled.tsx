import styled from "styled-components";

export const MainContainer = styled.main`
  margin-top: 2em;
  border: solid .5px transparent;

  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;

    width: 80vw;
    margin: 2em auto;

    padding: 2em 3em;
  }
  
`