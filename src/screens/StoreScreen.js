import React from "react";
import Header from "../components/Header";
import Store from "../components/Store";
import Footer from "../components/Footer";
import StoreBenner from "../components/StoreBenner";
import ImageAvatars from "../components/Avatars";
import Search from "@mui/icons-material/Search";
import SearchBar from "../components/SearchBar";

export default function Item() {
  return (
    <>
      <StoreBenner />
      <ImageAvatars />
      <Store />
      <SearchBar />
      <Footer />
    </>
  );
}
