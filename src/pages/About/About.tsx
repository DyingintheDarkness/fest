import React from "react";
import Layout from "../../components/Layout/Layout";
import { Header } from "./styles";



const About = () => {
  return (
    <Layout>
      <Header>
        <h1>About</h1>
        <p>
          We are an independent startup that sells high-quality, fashionable
          footwear. We are opening new stores in major cities.
        </p>
      </Header>
    </Layout>
  );
};

export default About;
