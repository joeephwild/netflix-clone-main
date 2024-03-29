import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movies from "./Movies";

function Row({ title, rowID, fetchURL, isLarge }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById(`slider${rowID}`);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById(`slider${rowID}`);
    slider.scrollLeft += 500;
  };

  return (
    <div>
      <h1 className="m-3 text-xl font-bold font-Beue md:9text-2xl mt-">{title}</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-black/50 text-red-600 h-full left-0  absolute hover:opacity-100 cursor=pointer z-10 hidden group-hover:block"
        />
        <div
          id={`slider${rowID}`}
          className="relative flex w-full h-full overflow-y-hidden scrollbar-hide scroll-smooth whitespace-nowrap"
        >
          {movies.map((movie, id) => (
            <Movies large={isLarge} movie={movie} key={movie.id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-black/50 text-red-600 h-full right-0  absolute hover:opacity-100 cursor=pointer z-10 hidden group-hover:block"
        />
      </div>
    </div>
  );
}

export default Row;
