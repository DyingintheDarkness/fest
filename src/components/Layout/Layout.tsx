import React from "react";
import Navbar from "./Navbar";
import { createGlobalStyle } from "styled-components";
import { animated, useTransition } from "react-spring";
import { useLocation } from "react-router-dom";

const ScrollVisible = createGlobalStyle`
  body {
    overflow-y: scroll;
  }  
`;

const Layout = ({
  children,
  scrollVisible,
  className,
}: {
  children: React.ReactNode;
  scrollVisible?: boolean;
  className?: string;
}) => {
  const location = useLocation();
  const transitions = useTransition(location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className={className}>
      {scrollVisible && <ScrollVisible />}
      <Navbar />
      {transitions((styles: any) => (
        <animated.div style={styles}>{children}</animated.div>
      ))}
    </div>
  );
};

export default Layout;
