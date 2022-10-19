import React from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../utils/AuthContext';
import { Data } from '../utils/ProfileData';

function Account() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative">
      <Link to="/">
      <AiOutlineArrowLeft className="text-4xl absolute top-0 left-0 text-white font-bold" />
      </Link>
    <div className="flex flex-col items-center overflow-x-hidden justify-center space-y-5">
      <div className="flex mt-20 space-x-5  items-center">
        {Data.map((index, id) => (
            <div key={id} className="justify-around hover:scale-105 transition duration-500 ease-in-out !rounded-full flex ">
              <img src={index.image} alt="" className="md:w-36 w-16 h-16 md:h-36  object-cover" />
            </div>
        ))};
      </div>
      <span className="text-5xl font-bold font-Beue text-white text-center flex justify-center">SARAH WILLIAMSON</span>
      <span className="border-2 font-bold text-lg px-4 justify-center flex py-2.5">Manage Account</span>
      <button
        type="button"
        onClick={handleLogout}
        className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
      >
        Logout
      </button>
    </div>
    </div>
  );
}

export default Account;
