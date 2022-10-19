import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlinePlayCircle, AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";
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
          <img className="hidden lg:block w-full lg:h-[800px] h-full md:opacity-25 object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
          <img className="lg:hidden w-full h-full  object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie?.title} />
          <div className="absolute font-Beue hidden lg:grid   w-full top-[30%] mb-3 p-4 md:p-8">
            <h1 className="text-red-600 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-3xl md:text-5xl font-bold">{movie?.title || movie?.original_title || movie?.name}</h1>
            <p>Realeased: {movie?.release_date}</p>
            <div className="flex py-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 fill-current text-red-600" />
              ))}
            </div>

            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{movie?.overview}</p>
            <div className="my-4">
              <div className="text-red-600 animate-pulse flex space-x-12">
                <button className="flex-col pr-4" type="button">
                  <AiOutlineInfoCircle size={25} /> More Info
                </button>
                <button className="text-white font-bold flex items-center bg-red-600 rounded-lg px-5 py-2" type="button">
                  <AiOutlinePlayCircle size={25} /> play
                </button>
                <button className="flex-col px-4" type="button">
                  <AiOutlinePlus size={25} /> MyList
                </button>
              </div>
            </div>
          </div>
        </div>
        <img className="w-[30%] rounded-lg shadow-2xl shadow-gray-600  h-[80%]  absolute hidden md:block top-[14%] left-[60%] object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie?.title} />
      </div>
    </div>
  );
}

export default Banner;
