import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="flex flex-col items-center justify-center space-y-5">
      <div className="flex mt-20 space-x-5  items-center">
        {Data.map((index, id) => (
            <div key={id} className="justify-around !border-2 !rounded-full flex ">
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
  );
}

export default Account;
