import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Store, Cart, About } from "./pages/exports";
import { Toaster } from "react-hot-toast";
import { GlobalStyle, Heading } from "./global-styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <RecoilRoot>
          <Suspense fallback={<Heading>Loading...</Heading>}>
            <Toaster
              position="top-right"
              containerStyle={{
                fontFamily: "DM Sans, 'sans-serif'",
              }}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/:id" element={<Cart />} />
              <Route path="*" element={<Heading>404 Page Not Found</Heading>} />
            </Routes>
          </Suspense>
        </RecoilRoot>
      </Router>
    </>
  );
}

export default App;
