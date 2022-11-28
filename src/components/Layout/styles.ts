import styled from "styled-components";

export const NavContainer = styled.div`
  z-index: 777;
  a {
    font-family: "DM Sans", sans-serif;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    color: #fff;
  }
  > div:first-child {
    display: none;
    visibility: hidden;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: var(--nav-background);
    padding: 0.2rem;
    padding-left: 1rem;
    padding-right: 0.5rem;

    > a,
    > div {
      svg {
        fill: #fff;
        width: 3rem;
        position: relative;
        top: 0.2rem;
      }
    }

    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      a {
        font-size: 1.2rem;
        z-index: 888;
      }
    }
  }

  > div:last-child {
    padding: 0.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-right: 1rem;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        svg {
          position: absolute;
          z-index: 200;
          width: 2.6rem;
          height: 2.6rem;
        }
      }
      nav {
        z-index: 150;
        position: absolute;
        left: 0;
        top: 0;
        background: var(--nav-background);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;

          gap: 3rem;
          a {
            align-self: flex-start;
            font-size: 3rem;
          }
        }
      }
    }

    svg {
      width: 2.5rem;
      position: relative;
      top: 0.2rem;
    }
  }

  @media only screen and (min-width: 480px) {
    > div:first-child {
      display: flex;
      visibility: visible;
    }
    > div:last-child {
      display: none;
      visibility: hidden;
    }
  }
  @media only screen and (min-width: 600px) {
    > div:first-child {
      nav {
        gap: 2rem;
        a {
          font-size: 1.3rem;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    position: relative;
    > div:first-child {
      > div {
        svg {
          width: 3.5rem;
          height: 3.5rem;
        }
      }
    }
  }
`;
