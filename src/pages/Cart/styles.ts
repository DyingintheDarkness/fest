import styled from "styled-components";
import Layout from "../../components/Layout/Layout";

export const StyledLayout = styled(Layout)`
  .cart-title {
    font-family: "Inter", sans-serif;
  }
  .cart-title {
    font-size: 1.8rem;
    font-weight: 600;
    width: 100%;
    color: #fff;
    text-align: center;
    margin-top: 1.2rem;
  }

  .empty-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
    margin: 0;
  }

  @media only screen and (min-width: 480px) {
    .cart-title {
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .cart-title {
      font-size: 2.5rem;
      margin: 0;
      position: relative;
      top: 1rem;
      left: -10rem;
    }
    .empty-cart {
      top: 0;
      left: 0;
    }
  }

  @media only screen and (min-width: 900px) {
    .empty-cart {
      height: 80vh;
    }
  }
  @media only screen and (min-width: 1200px) {
    .empty-cart {
      height: 75vh;
    }
  }
`;

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  background: #fff;
  color: #000;
  padding: 1rem;
  border-radius: 5px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0.6rem;
    div:first-child {
      padding: 0.3rem;
      border-radius: 10px;
      background: rgba(133, 133, 133, 0.2);
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3.6rem;
      img {
        width: 3.2rem;
      }
    }

    div:last-child {
      h1 {
        font-size: inherit;
        font-weight: 600;
        font-size: 1rem;
      }
      h2 {
        font-family: "DM Sans", sans-serif;
        font-size: 1.1rem;
        span {
          font-weight: 400;
        }
      }
    }
  }

  svg {
    width: 2rem;
  }

  @media only screen and (min-width: 480px) {
    > div div:last-child {
      h1 {
        font-size: 1.2rem;
      }
      h2 {
        font-size: 1.1rem;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 75%;

    > div div:first-child {
    }
    img {
      width: 1rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 60%;
  }
`;

export const SubTotalContainer = styled.div`
  width: 100%;
  border-radius: 5px 5px 0 0;
  background: #fff;

  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  justify-content: center;
  height: 65vh;
  z-index: 100;
  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 100%;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: row;
      width: 90%;
      justify-content: space-between;
      padding: 0.9rem;
      align-items: center;
      background: #f4f4f4;
      border-radius: 5px;

      font-weight: 600;
      h1,
      h2 {
        font-size: 1rem;
        font-weight: inherit;
      }
      h2 {
        font-weight: inherit;
        font-size: 0.9rem;
        span {
          font-weight: 400;
        }
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    margin-top: 1.5rem;
    h1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-size: 1rem;

      > span {
        font-weight: 600;
        span {
          font-weight: 400;
        }
      }
    }
  }

  > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1.4rem;

    h1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 1rem;
      span {
        font-weight: 600;
        span {
          font-weight: 400;
        }
      }
    }
  }

  button {
    width: 60%;
    border: 2px solid red;
    border-radius: 5px;
    background: #000;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    font-family: "DM Sans", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 2.8rem;
    align-self: center;
    margin-top: 1.5rem;
    position: relative;
  }

  @media only screen and (min-width: 480px) {
    > div:first-child div {
      padding: 1rem;
      h1 {
        font-size: 1.1rem;
      }
      h2 {
        font-size: 1rem;
      }
    }

    button {
      width: 50%;

      font-size: 1.1rem;
      height: 3rem;
    }
  }
  @media only screen and (min-width: 600px) {
    button {
      width: 40%;
    }
  }
  @media only screen and (min-width: 768px) {
    height: 92vh;
    position: sticky;
    margin-top: -4rem;
    border-radius: 0;
    right: 0;
    padding-left: 1rem;
    > div:nth-child(2) {
      padding-top: 2.8rem;
    }
    gap: 0.6rem;
    button {
      width: 70%;
      height: 3rem;
      font-size: 1.1rem;
      height: 3.2rem;
    }
  }

  @media only screen and (min-width: 900px) {
    button {
      width: 54%;
      height: 3rem;
    }

    > div:nth-child(2) {
      h1 {
        font-size: 1.2rem;
      }
    }
    > div:nth-child(3) {
      h1 {
        font-size: 1.2rem;
      }
    }

    > div:first-child {
      div {
        h1 {
          font-size: 1.2rem;
        }
        h2 {
          font-size: 1.05rem;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 65%;
  }
  @media only screen and (min-width: 1200px) {
    width: 45%;
    button {
      width: 60%;
    }
  }
`;