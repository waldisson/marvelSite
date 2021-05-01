import styled from "styled-components";

export const Container = styled.section`
  justify-content: center;
  width: 100%;
  max-width: 1360px;
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const CardDetails = styled.div`
  padding: 50px 0;
  justify-content: initial;
  display: flex;

  img {
    padding: 0 50px 50px 0;
  }

  @media (max-width: 800px) {
    display: inline;

    img {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      margin-top: 20px;
    }
    div h1 {
      font-size: 25px;
    }
  }
`;

export const CardDetailsInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  max-width: 100%;

  h1 {
    margin-top: 0 !important;
  }
`;
