import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { animated, useSpring } from "react-spring";
import uuid from "react-uuid";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/Store/ProductCard";
import { products } from "../../data";
import { cartAtom } from "../../statedrive/atoms";

import {
  listModalAtom,
  wishlistAtom,
  selectedListsAtom,
  updateWishlistAtom,
  wishlistedProductIdsAtom,
  productIdAtom,
} from "../../statedrive/atoms";
import { Container, CardContainer, WishlistModalContainer } from "./styles";



const Store = () => {
  const cart = useRecoilValue(cartAtom);
  const [wishlist, setWishlist] = useRecoilState(wishlistAtom);
  const [wishlistedProductIds, setWishlistedProductIds] = useRecoilState(
    wishlistedProductIdsAtom
  );
  let [selectedLists, setSelectedLists] = useRecoilState(selectedListsAtom);
  const [updateWishlist, setUpdateWishlist] =
    useRecoilState(updateWishlistAtom);
  const productId = useRecoilValue(productIdAtom);

  useEffect(() => {
    let items = [...wishlist];
    if (!productId || !updateWishlist) {
      return;
    }
    if (selectedLists.length > 0) {
      selectedLists.forEach((list) => {
        if (!items.some((item) => item.name === list)) {
          items.push({
            name: list,
            products: [],
          });
        }
      });
    }
    let isPresentListsCount = 0;
    for (let i = 0; i < items.length; i++) {
      if (selectedLists.includes(items[i].name)) {
        if (!items[i].products.includes(productId)) {
          items[i].products.push(productId);
          setWishlistedProductIds(
            new Set([...wishlistedProductIds, productId])
          );
        }
      } else {
        items[i].products = items[i].products.filter(
          (item) => item !== productId
        );
      }
      if (items[i].products.includes(productId)) {
        isPresentListsCount++;
      }
    }
    if (isPresentListsCount === 0) {
      setWishlistedProductIds(
        new Set([...wishlistedProductIds].filter((id) => id !== productId))
      );
      toast.success("Removed from Wishlist");
    } else {
      toast.success("Added to Wishlist");
    }
    setSelectedLists([]);
    let newWishlist = new Set(items);
    localStorage.setItem("wishlist", JSON.stringify([...newWishlist]));
    setWishlist(newWishlist);
    setUpdateWishlist(false);
  }, [updateWishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([...cart]));
  }, [cart]);

  return (
    <Layout scrollVisible={true}>
      <Container>
        <header>
          <h1>Store</h1>
        </header>

        <CardContainer>
          <div>
            {products.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        </CardContainer>
        <WishlistModal />
      </Container>
    </Layout>
  );
};

const WishlistModal = () => {
  const [showListModal, setShowListModal] = useRecoilState(listModalAtom);
  const [showInput, setShowInput] = React.useState(false);
  const [wishlist, setWishlist] = useRecoilState(wishlistAtom);
  const setUpdateWishlist = useSetRecoilState(updateWishlistAtom);
  const slideUpAnimation = useSpring({
    from: {
      bottom: "-200rem",
      display: "none",
      width: "0%",
    },
    to: {
      bottom: showListModal ? "0rem" : "-200rem",
      display: showListModal ? "flex" : "none",
      width: "100%",
    },
  });

  return (
    <WishlistModalContainer style={slideUpAnimation}>
      <div>
        <h1>Select a List</h1>
        <div>
          {[...wishlist].map((list) => {
            return <ListItem key={uuid()} list={list} />;
          })}
        </div>
        {showInput ? (
          <input
            type="text"
            placeholder="List Name..."
            onKeyDown={(e) =>
              e.key === "Enter" &&
              setWishlist(
                new Set([
                  ...wishlist,
                  {
                    name: (e.target as HTMLInputElement).value,
                    products: [],
                  },
                ])
              )
            }
          />
        ) : null}
        <div>
          <button onClick={() => setShowInput(!showInput)}>New List</button>
          <button
            onClick={() => {
              setShowListModal(false);
              setUpdateWishlist(true);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </WishlistModalContainer>
  );
};

const ListItem = ({ list }: any) => {
  const [hover, setHover] = React.useState(false);
  const [selectedLists, setSelectedLists] = useRecoilState(selectedListsAtom);
  let hoveredColor = hover ? "#ff9d00" : "#f4f4f4";
  const hoverListAnimation = useSpring({
    to: {
      borderRadius: "5px",
      backgroundColor: hoveredColor,
    },
  });

  const selectAnimation = useSpring({
    to: {
      zIndex: 200,
      backgroundColor: selectedLists.includes(list.name)
        ? "#00ff22"
        : hoveredColor,
    },
  });

  return (
    <animated.div
      style={{ ...hoverListAnimation, ...selectAnimation }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={async () => {
        if (selectedLists.includes(list.name)) {
          return setSelectedLists(
            selectedLists.filter((item) => item !== list.name)
          );
        } else {
          return setSelectedLists([...selectedLists, list.name]);
        }
      }}
      id={uuid()}
    >
      <h1>{list.name}</h1>
      <p>{list.products.length} Items</p>
    </animated.div>
  );
};
export default Store;
