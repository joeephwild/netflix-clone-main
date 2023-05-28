import React, { useState } from "react";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { FaRegHeart } from "react-icons/fa";
import { db } from "../firebase";
import { UserAuth } from "../utils/AuthContext";

function Movies({ movie, large }) {
  const [like, setLike] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "user", `${user?.email}`);

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const close = () => {
    setTrailerUrl("");
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.poster_path,
        }),
      });
    } else {
      alert("pls login first");
    }
  };
  return (
    <div className="pl-6 relative w-[250px] ">
      <div onClick={() => handleClick(movie)}>
        <img
          className={`max-w-[120px] h-[200px] cursor-pointer hover:scale-95 transition-all ease-in-out block object-cover rounded-br-lg rounded-tl-lg ${
            large && "h-[400px] max-w-[200px]"
          }`}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div
        onClick={saveShow}
        className="absolute bg-red-600 rounded-br-lg top-0 p-2 right-o text-white"
      >
        {like ? <AiFillHeart size={15} /> : <FaRegHeart size={15} />}
      </div>
      {trailerUrl && (
        <div className="fixed bg-black/40 px-4 py-2 w-screen inset-0 h-screen z-[999999]">
          <YouTube videoId={trailerUrl} opts={opts} />
          <button
            onClick={close}
            type="button"
            className="bg-red-600 p-4 text-xl text-white rounded-full absolute top-0"
          >
            <AiOutlineClose />
          </button>
        </div>
      )}
    </div>
  );
}

export default Movies;
