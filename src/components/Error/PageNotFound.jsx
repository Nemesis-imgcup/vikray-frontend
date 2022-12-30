import React from 'react'
import { Homeicon } from './assets';
import { Link } from 'react-router-dom';
/**
 * @description Page Not Found
 * @returns {JSX.Element} react component
 */
const PageNotFound = () => {
  return (
    <div>
      <div className="text-[#F8F872] text-center mt-[25vh] font-extrabold text-[9vw] tracking-wide">
        Oops !
      </div>
      <div className=" text-center text-white font-semibold text-4xl mt-4">
        404 | PAGE NOT FOUND
      </div>
      <div className=" text-center text-[#F8F872] font-normal text-2xl mt-4">
        The page you are looking for might have been removed, <br /> had its name
        changed or is temporarily unavailabel
      </div>
      <div className="flex justify-center pt-[9vh]">
        <Link to="/">
          <button className="bg-[#FFFF6D] flex items-center space-x-3 text-black px-[2vw] py-[1vw] rounded-xl">
            <Homeicon />
            <div className="font-medium text-2xl">HOME</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound
