import { lazy } from "react";

export const Home = lazy(() => import("./Home/Home"))
export const About = lazy(() => import("./About/About"))
export const Cart = lazy(() => import("./Cart/Cart"))
export const Store = lazy(() => import("./Store/Store"))
