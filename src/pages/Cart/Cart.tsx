import React, { useState, useEffect } from "react";
import { cartAtom } from "../../statedrive/atoms";
import { useRecoilState } from "recoil";
import { products } from "../../data";
import uuid from "react-uuid";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../types/types";
import { StyledLayout, Container, ItemsContainer, CartItem, SubTotalContainer } from "./styles";



const Cart = () => {
  const [cart, setCart] = useRecoilState(cartAtom);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setCart(new Set([id]));
    }
  }, [id]);

  const [billing, setBilling] = useState<{
    subTotal: number;
    shipping: number;
    total: number;
  }>({
    subTotal: 0,
    shipping: 0,
    total: 0,
  });

  useEffect(() => {
    let items: Product[] = products.filter((product) => cart.has(product.id));
    setCartItems(items);
    items.forEach((item) => {
      setBilling({
        ...billing,
        subTotal: billing.subTotal + item.price,
        shipping: billing.shipping + item.price * 0.01,
        total: billing.total + item.price + item.price * 0.01,
      });
    });
  }, [cart]);

  return (
    <StyledLayout scrollVisible={true}>
      {cart.size > 0 ? (
        <h1 className="title cart-title">Cart</h1>
      ) : (
        <h1 className="title cart-title empty-cart">Cart Is Empty</h1>
      )}

      <Container>
        <ItemsContainer>
          {cartItems.map((item) => {
            return (
              <CartItem key={uuid()}>
                <div>
                  <div>
                    <img src={item.image} alt="" />
                  </div>

                  <div>
                    <h1>{item.title}</h1>
                    <h2>
                      <span>$ </span>
                      {item.price}
                    </h2>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => {
                    let newItems = new Set(
                      [...cart].filter((id) => item.id !== id)
                    );
                    setCart(newItems);
                    localStorage.setItem("cart", JSON.stringify([...newItems]));
                    toast.success("Item Removed From Cart");
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </CartItem>
            );
          })}
        </ItemsContainer>

        {cart.size > 0 ? (
          <SubTotalContainer>
            <div>
              {cartItems.map((item) => {
                return (
                  <div key={uuid()}>
                    <h1>{item.title}</h1>
                    <h2>
                      <span>$ </span>

                      {item.price}
                    </h2>
                  </div>
                );
              })}
            </div>

            <div>
              <h1>
                Subtotal
                <span>
                  <span>$</span>
                  {billing.subTotal.toFixed(2)}
                </span>
              </h1>
              <h1>
                Shipping
                <span>
                  <span>$</span>
                  {/* only show till 2 numbers after decimal */}
                  {billing.shipping.toFixed(2)}
                </span>
              </h1>
            </div>

            <div>
              <h1>
                Total
                <span>
                  <span>$</span>
                  {billing.total.toFixed(2)}
                </span>
              </h1>
            </div>

            <button
              onClick={() => {
                toast.success("Purchase Successful");
                setCart(new Set());
                return navigate("/store");
              }}
            >
              Place Order
            </button>
          </SubTotalContainer>
        ) : null}
      </Container>
    </StyledLayout>
  );
};

export default Cart;
