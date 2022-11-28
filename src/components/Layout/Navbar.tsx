import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import uuid from "react-uuid";
import { NavContainer } from "./styles";

const AnimatedLink = animated(Link);

const NavLink = ({ name, path }: { name: string; path: string }) => {
  return <AnimatedLink to={path}>{name}</AnimatedLink>;
};

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  let links: {
    name: string;
    path: string;
  }[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Store",
      path: "/store",
    },
    {
      name: "Cart",
      path: "/cart",
    },
  ];

  const toggleNav = useSpring({
    from: {
      left: "-200rem",
    },
    to: {
      left: showNav ? "0rem" : "-200rem",
    },
    config: {
      friction: showNav ? 30 : 100,
      duration: showNav ? undefined : 1000,
    },
  });

  const animatedNavMenu = useSpring({
    from: {
      left: "-200rem",
    },
    to: {
      left: "0rem",
    },
  });

  return (
    <NavContainer>
      <div>
        <Link to="/">
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            fillRule="evenodd"
          >
            <path
              fillRule="evenodd"
              d="M 6.40625 16.800781 C 3.152344 20.621094 0 25.234375 0 28.902344 C 0 31.019531 1.78125 33.996094 6.132813 33.996094 C 8.484375 33.996094 10.820313 33.050781 12.648438 32.320313 C 15.730469 31.085938 49.789063 16.296875 49.789063 16.296875 C 50.117188 16.132813 50.058594 15.925781 49.644531 16.027344 C 49.480469 16.070313 12.566406 26.074219 12.566406 26.074219 C 11.855469 26.273438 11.128906 26.382813 10.421875 26.382813 C 7.230469 26.382813 5.078125 24.851563 5.078125 21.503906 C 5.078125 20.207031 5.484375 18.640625 6.40625 16.800781 Z"
            />
          </svg>
        </Link>

        <nav>
          {links.map((link) => {
            return <NavLink key={uuid()} {...link} />;
          })}
        </nav>
        <div>
          <a
            href="https://github.com/DyingintheDarkness"
            rel="noopener noreferrer"
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
            >
              <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <div>
          <div>
            <animated.svg
              onClick={() => setShowNav(!showNav)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              style={animatedNavMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </animated.svg>
          </div>

          <animated.nav style={toggleNav}>
            <div>
              {links.map((link) => {
                return <NavLink key={uuid()} {...link} />;
              })}
            </div>
          </animated.nav>
        </div>
        <Link to="/">
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            fillRule="evenodd"
          >
            <path
              fillRule="evenodd"
              d="M 6.40625 16.800781 C 3.152344 20.621094 0 25.234375 0 28.902344 C 0 31.019531 1.78125 33.996094 6.132813 33.996094 C 8.484375 33.996094 10.820313 33.050781 12.648438 32.320313 C 15.730469 31.085938 49.789063 16.296875 49.789063 16.296875 C 50.117188 16.132813 50.058594 15.925781 49.644531 16.027344 C 49.480469 16.070313 12.566406 26.074219 12.566406 26.074219 C 11.855469 26.273438 11.128906 26.382813 10.421875 26.382813 C 7.230469 26.382813 5.078125 24.851563 5.078125 21.503906 C 5.078125 20.207031 5.484375 18.640625 6.40625 16.800781 Z"
            />
          </svg>
        </Link>
      </div>
    </NavContainer>
  );
};

export default Navbar;
