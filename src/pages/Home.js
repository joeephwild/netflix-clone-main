import React, { Suspense, useState, useEffect } from "react";
import { AiOutlinePlayCircle, AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";
import requests from "../utils/requests";
import Banner from "../components/Banner";
import Row from "../components/Row";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
    <Navbar />
      <Banner />
      <div className="flex  mt-20 bg-transparent left-10 text-lg font-Beue font-bold absolute top-8 md:hidden space-x-16 justify-between">
        <span>Tv Shows</span>
        <span>Movies</span>
        <span>Categories</span>
      </div>
      <div className="flex items-center font-Beue justify-between lg:hidden p-6">
        <button className="flex-col pr-4" type="button">
          <AiOutlineInfoCircle size={25} /> More Info
        </button>
        <button className="text-white font-bold flex items-center bg-red-600 px-5 py-2" type="button">
          <AiOutlinePlayCircle size={25} /> play
        </button>
        <button className="flex-col px-4" type="button">
          <AiOutlinePlus size={25} /> MyList
        </button>
      </div>
      <div className="">
        <Row rowID="1" title="Trending" fetchURL={requests.fetchTrending} />
      </div>
      <div>
        <Row rowID="3" title="Top Rated" fetchURL={requests.fetchTopRated} />
      </div>
      <div>
        <Row rowID="2" title="Only on Netflix" fetchURL={requests.fetchNetflixOriginals} />
      </div>
      <div className="">
        <Row rowID="4" title="Get in on the Action" fetchURL={requests.fetchActionMovies} />
      </div>
      <div>
        <Row rowID="5" title="Favourie Movies" fetchURL={requests.fetchComedyMovies} />
      </div>
      <div>
        <Row rowID="6" title="Horror Myths + Legends" fetchURL={requests.fetchHorrorMovies} />
      </div>
      <div>
        <Row rowID="7" title="Love all the Way" fetchURL={requests.fetchRomanceMovies} />
      </div>
      <div>
        <Row rowID="8" title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default Home;
