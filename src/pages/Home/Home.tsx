import React from "react";
import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header, Container } from "./styles";



const Home = () => {
  return (
    <Layout>
      <Header>
        <Container>
          <div>
            <div>
              <h1>
                Our
                <br />
                Newest
                <br />
                Releases
              </h1>
              <p>
                You'll be amazed to discover our
                <br />
                best selection of sneakers.
              </p>
            </div>
            <div>
              <Link to={"/store"}>Check It Out</Link>
              <Link to={"/faq"}>Learn More</Link>
            </div>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dig6ih2ni/image/upload/v1669361487/FEST/Products/moto_lih1yn.png"
              alt=""
            />
          </div>
        </Container>
      </Header>
    </Layout>
  );
};

export default Home;
