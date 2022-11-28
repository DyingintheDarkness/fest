import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 1rem;
  gap: 1rem;
  height: 60vh;
  padding-right: .3rem;
  h1 {
    font-size: 2rem;
    font-family: "Inter", sans-serif;
    font-weight: 600;
  }
  p {
    font-family: "DM Sans", sans-serif;
    font-size: 1.15rem;
    letter-spacing: .02rem;
    
  }

  @media only screen and (min-width: 480px) {
    h1 {
      font-size: 2.4rem;
    }
    p {
      width: 90%;
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      width: 90%;
      font-size: 1.4rem;
    }
  }
  @media only screen and (min-width: 600px) {
    p {
      width: 80%;
    }
  }
  @media only screen and (min-width: 768px) {
    padding-left: 3rem;
    p {
      width: 70%;
    }
  }
  @media only screen and (min-width: 900px) {
    padding-left: 5rem;
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.6rem;
      width: 60%;
    }
  }
  @media only screen and (min-width: 1024px) {
    p {
      width: 60%;
    }
  }
  @media only screen and (min-width: 1200px) {
    p {
      width: 50%;
    }
  }
`;