import axios from "axios";
import { FaPlay } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <div className="" />
      <img className="w-full relative h-[450px] object-cover opacity-25" src={`https://image.tmdb.org/t/p/original${currentMovie.poster_path}`} />
      <div className="absolute top-[38%] left-[47%] border-2 border-red-500 p-6 transition ease-in-out duration-150 hover:scale-105 cursor-pointer rounded-full">
        <FaPlay size={45} />
      </div>
      <div className="flex flex-col items-center mt-9">
        <span className="text-6xl absolute bottom-0 left-7  font-black font-Beue">{currentMovie.title}</span>
      </div>
      <span className="text-sm font-medium tracking-tight text-center justif-center items-center flex">{currentMovie.overview}</span>
    </div>
  );
}

export default MovieDetails;
