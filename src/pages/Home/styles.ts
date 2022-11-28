import styled from "styled-components";

export const Header = styled.header`
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 480px) {
    height: 75vh;
  }
  @media only screen and (min-width: 800px) {
    height: 90vh;
  }
  @media only screen and (min-width: 900px) {
    height: 100vh;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-left: 10%;
  gap: 0.7rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 0.7rem;
    div:first-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.2rem;
      h1 {
        
        font-size: 3.2rem;
        font-family: "Inter", sans-serif;
        font-weight: 600;
      }
      p {
        font-size: 1rem;
        font-weight: 500;
        font-family: "DM Sans", sans-serif;
        white-space: nowrap;
      }
    }

    div:last-child {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      a {
        font-family: "DM Sans", sans-serif;
        font-size: 0.8rem;
        text-decoration: none;
        color: inherit;
        border: 2px solid #3f3b48;
        border-radius: 5px;
        width: 7.2rem;
        height: 2.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        &:first-child {
          font-weight: 600;
          background: #b4abfa;
          border-color: #b4abfa;
          color: #000;
        }
      }
    }
  }

  > div:last-child {
    display: none;
    visibility: hidden;
    
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 480px) {
    
    > div {
      gap: 1rem;
      div:first-child {
        gap: .3rem;
        h1 {
          font-size: 3.4rem;
        }
        p{
          font-size: 1.4rem;
        }
    }
    div:last-child{
      a{
        font-size: 1rem;
        width: 8.5rem;
        height: 2.5rem;
      }
    }


  }

  @media only screen and (min-width: 800px) {


    > div:last-child {
    display: flex;
    visibility: visible;
    img{
      width: 27rem;
      position: relative;
      top: -3.7rem;
      left: -2rem;
    }
  }

  }


  @media only screen and (min-width: 900px) {
    > div {
      gap: 1.2rem;
      div:first-child {
        gap: .6rem;
        h1 {
          font-size: 3.8rem;
        }
        p{
          font-size: 1.6rem;
        }
    }
    div:last-child{
      a{
        font-size: 1.2rem;
        width: 10rem;
        height: 2.8rem;
      }
    }


  }
    > div:last-child {
    
    img{
      width: 30rem;
      top: -6rem;
      left: -3rem;
    }

  }

  @media only screen and (min-width: 1024px) {
    
    
    > div:last-child{
      
      img{
        width: 34rem;
        left: -5rem;
      }
    }
    
  }
  
  
  @media only screen and (min-width: 1200px) {
    > div {
      gap: 1.6rem;
      div:first-child {
        gap: .6rem;
        h1 {
          font-size: 4.4rem;
        }
        p{
          font-size: 1.8rem;
        }
    }

  div:last-child{
    a{
      width: 12rem;
      height: 3rem;
    }
  }
}

> div:last-child{
  padding-right: 10%;
  img{
    width: 35rem;
    top: -5.5rem;    
    }
  }
}
  `;