import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { StarIcon } from "@heroicons/react/solid";
import requests from "../utils/requests";

function Banner() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.fetchTrending).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="">
      <div className="w-full relative h-[700px]">
        <div className="w-full h-full">
          <div className="w-full h-full absolute g-gradient-to-t from-black to-transparent z-[20] top-0" />
          <div className="w-full h-full absolute g-gradient-to-b md:hidden block from-black to-transparent z-[20] top-0" />
          <img className="hidden lg:block w-full lg:h-[800px] xl:h-[950px] h-full md:opacity-25 object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
          <img className="object-cover w-full h-full lg:hidden" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie?.title} />
          <div className="absolute font-Beue hidden lg:grid   w-full top-[30%] mb-3 p-4 md:p-8">
            <h1 className="text-red-600 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-3xl md:text-5xl font-bold">{movie?.title || movie?.original_title || movie?.name}</h1>
            <p>Realeased: {movie?.release_date}</p>
            <div className="flex py-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-red-600 fill-current" />
              ))}
            </div>

            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{movie?.overview}</p>
            <div className="my-4">
              <div className="flex items-center space-x-12 text-red-600">
                <button className="flex-col pr-4" type="button">
                  <AiOutlineInfoCircle size={39} />
                </button>
                <button className="flex items-center p-4 font-bold text-white bg-red-600 rounded-full" type="button">
                  <FaPlay size={39} />
                </button>
                <div className="flex flex-col items-center font-Beue">
                   <AiOutlinePlus size={39} />
        </div>
              </div>
            </div>
          </div>
        </div>
        <img className="w-[30%] rounded-lg shadow-2xl shadow-gray-600 h-[80%] xl:h-[100%]  absolute hidden md:block top-[12%] left-[60%] object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie?.title} />
      </div>
    </div>
  );
}

export default Banner;
