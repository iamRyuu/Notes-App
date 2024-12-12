// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";

const Home = () => {
  return(
    <>
      <Navbar/>
      <NoteCard/>
      <div className="container mx-auto"></div>
    </>
  );
};

export default Home;
