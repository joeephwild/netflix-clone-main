import axios from "axios";
import { AiOutlinePlus, AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillHandThumbsUpFill, BsFillVolumeUpFill, BsVolumeUpFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaShare, FaPlay } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetails() {
  const [currentMovie, setCurrentMovie] = useState({});
  const { id } = useParams();

  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8d4fbe03b6c5ab92b91776b7cc982e2d&language=en-US&append_to_response=recommendations`).then((response) => {
      setCurrentMovie(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(currentMovie);
  return (
    <div className=" ">
      <Link to="/">
      <AiOutlineArrowLeft className="text-4xl absolute top-0 left-0 text-white font-bold" />
      </Link>
      <BsFillVolumeUpFill className="text-4xl absolute bottom-4 right-0 text-white font-bold" />
      <div className="" />
      <img className="w-full relative h-[450px] object-cover opacity-25" src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path}`} />
      <div className="absolute top-[38%] left-[47%] border-2 border-red-500 p-6 transition ease-in-out duration-150 hover:scale-105 cursor-pointer rounded-full">
        <FaPlay size={45} />
      </div>
      <div className="flex flex-col items-center mt-9">
        <span className="text-6xl absolute bottom-0 left-7  font-black font-Beue">{currentMovie.title}</span>
      </div>
      <div className="mx-auto items-center flex flex-col space-y-4">
      <button type="button" className="bg-red-600 text-white px-9 py-2.5 space-x-4 w-[80%] text-center mx-auto flex justify-center items-center">
        <FaPlay size={25} />
        <span>Play</span>
      </button>
      <button type="button" className="bg-gray-900 text-white px-9 py-2.5 space-x-4 w-[80%] text-center mx-auto flex justify-center items-center">
        <HiDownload size={25} />
        <span>Download</span>
      </button>
      <div className="md:flex flex-col items-center justify-around gap-5 ">
      <span className="text-lg font-medium w-[70%]  font-Beue tracking-widest text-center justif-center items-center flex">{currentMovie.overview}</span>
      <div className="flex space-x-9 items-center">
        <div className="flex items-center flex-col font-Beue">
           <AiOutlinePlus className="text-3xl" />
          <span>
           List
          </span>
        </div>
        <div className="flex items-center flex-col font-Beue">
           <BsFillHandThumbsUpFill className="text-3xl" />
          <span>
           Rate
          </span>
        </div>
        <div className="flex items-center flex-col font-Beue">
        <FaShare className="text-3xl" />
          <span>
           Share
          </span>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default MovieDetails;
