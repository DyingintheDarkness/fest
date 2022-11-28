import { atom } from "recoil";

const parseJSON = (item: any) => {
  try {
    return JSON.parse(item);
  } catch (e) {
    return null;
  }
  return null;
};

let cart = parseJSON(localStorage.getItem("cart")),
  wishlist = parseJSON(localStorage.getItem("wishlist"));

export const cartAtom = atom<Set<string>>({
  key: "cartAtom",
  default: cart ? new Set(cart) : new Set(),
});

export const wishlistAtom = atom<Set<{ name: string; products: string[] }>>({
  key: "wishlistAtom",
  default: wishlist ? new Set(wishlist) : new Set([{ name: "My Wishlist", products: [] }]),
});
export const listModalAtom = atom<boolean>({
  key: "listModalAtom",
  default: false,
});
export const selectedListsAtom = atom<string[]>({
  key: "selectedListsAtom",
  default: [],
});
export const updateWishlistAtom = atom<boolean>({
  key: "updateWishlistAtom",
  default: false,
});

export const wishlistedProductIdsAtom = atom<Set<string>>({
  key: "wishlistedProductIdsAtom",
  default: new Set(
    wishlist
      ? wishlist
          .map((item: { name: string; products: string[] }) => item.products)
          .flat()
      : []
  ),
});

export const productIdAtom = atom<null | string>({
  key: "productIdAtom",
  default: null,
});
