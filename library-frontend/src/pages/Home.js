import React from "react";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import BookGrid from "../components/BookGrid";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <SearchBar />
        <BookGrid />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
