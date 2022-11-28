import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  cartAtom,
  listModalAtom,
  selectedListsAtom,
  wishlistAtom,
  updateWishlistAtom,
  productIdAtom,
  wishlistedProductIdsAtom,
} from "../../statedrive/atoms";
import { animated, useSpring } from "react-spring";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: #000;
  font-family: "DM Sans", sans-serif;
  padding: 1rem;
  border-radius: 5px;

  div:first-child {
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
    align-self: flex-end;
    cursor: pointer;
    position: relative;
    top: -0.7rem;
    right: -0.5rem;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 10rem;
      transform: rotate(-10deg);
      position: relative;
    }
  }

  div:nth-child(3) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.2rem;
    margin-top: 1rem;
    h1,
    h2 {
      font-size: 1.2rem;
      font-weight: 600;
    }
    h1 {
      font-family: "Inter", sans-serif;
    }
    h2 {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      span {
        font-weight: 400;
      }
    }
  }

  > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
    width: 100%;
    button {
      width: 100%;
      padding: 0.5rem;
      border-radius: 6px;
      background: #1f2020;
      font-family: "DM Sans", sans-serif;
      font-weight: 500;
      color: #fff;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #01434e;
      border-radius: 200px;
      padding: 0.5rem;
      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }

  @media only screen and (min-width: 480px) {
    div:first-child {
      top: -0.3rem;
      svg {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
    > div:last-child {
      button {
        height: 2.6rem;
      }
      div {
        padding: 0.7rem;
      }
    }
    > div:nth-child(2) {
      height: 10rem;
    }
  }

  @media only screen and (min-width: 900px) {
    > div:nth-child(2) {
      height: 15rem;
      img {
        width: 14rem;
      }
    }

    > div:last-child {
      button {
        height: 3rem;
        font-size: 0.98rem;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    > div:last-child {
      button {
        height: 3rem;
        font-size: 1.2rem;
      }
    }
  }
`;

const ProductCard = ({
  id,
  title,
  image,
  price,
}: {
  id: string;
  title: string;
  image: string;
  price: number;
}) => {
  const [cart, setCart] = useRecoilState(cartAtom);
  const wishlist = useRecoilValue(wishlistAtom);
  const setShowListModal = useSetRecoilState(listModalAtom);
  let [selectedLists, setSelectedLists] = useRecoilState(selectedListsAtom);
  const setUpdateWishlist = useSetRecoilState(updateWishlistAtom);
  const [productId, setProductId] = useRecoilState(productIdAtom);
  const wishlistedProductIds = useRecoilValue(wishlistedProductIdsAtom);
  const navigate = useNavigate();

  const addToWishlist = async (id: string) => {
    if (productId) {
      setProductId(null);
    }
    const isPresentLists: string[] = [];
    wishlist.forEach((list) => {
      if (list.products.includes(id)) {
        isPresentLists.push(list.name);
      }
    });
    setSelectedLists([...isPresentLists, ...selectedLists]);
    setShowListModal(true);
    setUpdateWishlist(false);
    setProductId(id);
  };

  const heartAnimation = useSpring({
    to: {
      fill: wishlistedProductIds.has(id) ? "#f6046f" : "#fff",
      stroke: wishlistedProductIds.has(id) ? "#f6046f" : "#000",
    },
    config: {
      duration: 500,
      tension: 200,
    },
    reset: true,
  });

  return (
    <Container>
      <div>
        <animated.svg
          style={heartAnimation}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          onClick={() => addToWishlist(id)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </animated.svg>
      </div>

      <div>
        <img src={image} alt="" />
      </div>

      <div>
        <h1>{title}</h1>
        <h2>
          <span>$</span>
          {price}
        </h2>
      </div>

      <div>
        <button
          onClick={() => {
            return navigate(`/cart/${id}`);
          }}
        >
          Buy Now
        </button>
        <div
          onClick={() => {
            setCart(new Set([...cart, id]));
            toast.success("Added to Cart");
          }}
        >
          <svg
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 0.25C5.11453 0.25 5.22436 0.295495 5.30534 0.376477C5.38632 0.457458 5.43182 0.567293 5.43182 0.681818V4.56818H9.31818C9.43271 4.56818 9.54254 4.61368 9.62352 4.69466C9.70451 4.77564 9.75 4.88547 9.75 5C9.75 5.11453 9.70451 5.22436 9.62352 5.30534C9.54254 5.38632 9.43271 5.43182 9.31818 5.43182H5.43182V9.31818C5.43182 9.43271 5.38632 9.54254 5.30534 9.62352C5.22436 9.70451 5.11453 9.75 5 9.75C4.88547 9.75 4.77564 9.70451 4.69466 9.62352C4.61368 9.54254 4.56818 9.43271 4.56818 9.31818V5.43182H0.681818C0.567293 5.43182 0.457458 5.38632 0.376477 5.30534C0.295495 5.22436 0.25 5.11453 0.25 5C0.25 4.88547 0.295495 4.77564 0.376477 4.69466C0.457458 4.61368 0.567293 4.56818 0.681818 4.56818H4.56818V0.681818C4.56818 0.567293 4.61368 0.457458 4.69466 0.376477C4.77564 0.295495 4.88547 0.25 5 0.25Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default ProductCard;
