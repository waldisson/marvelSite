import styled from "styled-components";

export const Container = styled.section`
  padding: 10px;
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1400px;
  margin-top: 30px;
`;

export const CardView = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    width: 100%;
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    width: 100%;
  }

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    width: 100%;
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    position: relative;
    display: inline-block;
    box-shadow: 0 26px 24px -16px rgb(0 0 0 / 40%);
    margin-bottom: 20px;
    border-radius: 5px;

    div {
      background-color: green;
    }

    &:hover {
      transform: scale(1.07);
      transition: all 0.5s ease-in-out;
    }
  }
`;

export const CardDiv = styled.div`
  cursor: pointer;

  div p {
    font-size: 16px;
    margin-top: 10px;
  }
`;

// export const Content = styled.div`
//    justify-content: center;
//   width: 100%;
//   max-width: 1360px;
//   padding: 0 30px;
//   margin: 0 auto;
//   margin-top: 30px;
// `;

// export const ContentTitle = styled.h3`
//   margin-bottom: 25px;
// `;
// export const ContentCard = styled.div`
//   background-color: green;
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
// `;

// export const CardView = styled.div`
//   margin: 0 0 30px 0 !important;
//   position: relative;
//   cursor: pointer;
//   display: inline-block;

//   img {
//     width: 50%;
//     margin-bottom: 20px;
//     box-shadow: 0 26px 24px -16px rgb(0 0 0 / 40%);
//   }
//   &:hover {
//     transform: scale(1.07);
//     transition: all 0.5s ease-in-out;
//   }
/* &:after,
  :before {
    content: "";
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
  }

  &:before {
    border-left: 1px solid red;
    border-right: 1px solid red;
    transform: scaleY(0);
  }
  &:after {
    border-top: 1px solid red;
    border-bottom: 1px solid red;
    transform: scaleX(0);
  }
  &:hover:before {
    transform: scaleY(1);
  }
  &:hover:after {
    transform: scaleX(1);
  } */
