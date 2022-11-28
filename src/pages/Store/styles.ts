import { animated } from "react-spring";
import styled from "styled-components";

export const Container = styled.div`
  header {
    margin-top: 3rem;
    h1 {
      font-size: 2rem;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      color: #fff;
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }

  @media only screen and (min-width: 900px) {
    header {
      h1 {
        font-size: 3rem;
      }
    }
  }
`;
export const CardContainer = styled.div`
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 66%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  @media only screen and (min-width: 480px) {
    width: 100%;

    > div {
      height: 100%;
    }
  }

  @media only screen and (min-width: 600px) {
    > div {
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      gap: 2rem;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-around;
      > div {
        flex-basis: 40.333333%;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    > div {
      > div {
        flex-basis: 36.333333%;
      }
    }
  }

  @media only screen and (min-width: 900px) {
    > div {
      padding: 1rem;
      > div {
        flex-basis: 30.333333%;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    > div {
      > div {
        flex-basis: 24.333333%;
      }
    }
  }
`;

export const WishlistModalContainer = styled(animated.div)`
  position: fixed;
  display: none;
  bottom: -200rem;
  left: 0;
  right: 0;
  width: 0;
  justify-content: center;
  align-items: center;

  > div {
    cursor: pointer;
    background: #fff;
    width: 100%;
    height: fit-content;
    border-radius: 2px 2px 0 0;
    color: #000;
    gap: 0.1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    button,
    p {
      font-family: "DM Sans", sans-serif;
    }
    > h1 {
      font-family: "Inter", sans-serif;
      text-align: center;
      align-self: center;
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: 1.2rem;
    }
    input {
      width: 100%;
      outline: none;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      padding: 0.5rem;
      height: 2.5rem;
      color: #000;
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 0.6rem;
      padding-bottom: 1rem;
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 85%;
        height: 3rem;
        background: #f4f4f4;
        border: none;
        padding: 0.7rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        h1 {
          font-family: "Inter", sans-serif;
          font-size: 1rem;
          font-weight: 600;
        }
        p {
          font-size: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
        }
      }
    }

    div:last-child {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      width: 100%;

      button {
        width: 100%;
        height: 3rem;
        font-size: 0.99rem;
        font-weight: 600;
        border: none;
        color: #fff;
        height: 2.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        &:first-child {
          background: #1f2020;
        }
        &:last-child {
          background: #24e1c6;
        }
      }
    }
  }

  @media only screen and (min-width: 600px) {
    > div {
      input {
        width: 80%;
        margin-bottom: 1rem;
        border-radius: 5px;
        align-self: center;
        height: 3rem;
      }
      > h1 {
        font-size: 1.3rem;
        padding-top: 1.5rem;
      }
      div:last-child {
        gap: 1rem;
        padding-bottom: 0.5rem;
        button {
          width: 40%;
          border-radius: 5px;
          border: none;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    > div {
      input {
        width: 70%;
      }

      div:nth-child(2) {
        div {
          width: 75%;
          height: 3.2rem;
        }
      }
      div:last-child {
        button {
          width: 30%;
        }
      }
    }
  }

  @media only screen and (min-width: 900px) {
    > div {
      input {
        width: 50%;
      }
      div:nth-child(2) {
        div {
          width: 60%;
          height: 3.2rem;
        }
      }
      div:last-child {
        button {
          width: 25%;
          height: 3rem;
          font-size: 1.1rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    > div {
      input {
        width: 45%;
        font-size: 1.1rem;
      }
      > h1 {
        padding-bottom: 2rem;
      }
      div:nth-child(2) {
        > div {
          width: 50%;
          height: 3.5rem;
          margin-bottom: 1rem;
          h1 {
            font-size: 1.1rem;
          }
          p {
            font-size: 0.92rem;
          }
        }
      }
      div:last-child {
        button {
          width: 20%;
          height: 3.4rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1200px) {
     {
      input {
        width: 45%;
      }
      div:nth-child(2) {
        > div {
          width: 50%;
        }
      }
      div:last-child {
        button {
          width: 10%;
        }
      }
    }
  }
`;