import React, { useState, useEffect } from "react";
import Img from "../../images/logo/prologoproject.jpg";
import { Link, NavLink } from "react-router-dom";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import banner from "../../images/cover/banner.png";

const Landing = () => {
  const [navbar, setNavbar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [apiData, setApiData] = useState(null); // State to hold API data

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://marketgame-game.onrender.com/api/fetchedOne")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <nav className="w-full shadow-md bg-white">
        <div className="items-center justify-between  lg:max-w-full md:items-left md:flex md:px-24 ">
          <div className="flex items-center justify-between py-1 md:py-5 md:block">
            <Link to="/home">
              <h2 className="text-2xl font-bold text-black">
                <img src={Img} alt="Logo" className="w-50 lg:ml-0 ml-4" />
              </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 text-center rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <CgClose className="w-6 h-6 text-black" />
                ) : (
                  <CgMenuGridO className="w-8 text-black h-7" />
                )}
              </button>
            </div>
          </div>
          <div className={`md:block ${navbar ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:space-x-1 md:space-y-0">
              <li>
                <NavLink
                  to="/"
                  className="block px-4 py-2   text-black font-bold no-underline  "
                
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="block px-4 py-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
            
                >
                  About Us
                </NavLink>
              </li>
             
           
              <li>
                <NavLink
                  to="/"
                  className="block px-4 py-2 text-black no-underline font-bold hover:rounded-md hover:bg-gray-800 hover:text-white"
                 
                >
               Result
                </NavLink>
              </li>
             
              
            </ul>
          </div>
          <div className={`md:block ${navbar ? "block" : "hidden"} `}>
          <div className="xl:flex gap-4 px-3 py-2">
            <div >
           <NavLink to="/auth/signin">
              <button type="submit" className=" flex font-medium w-30 mt-1 justify-center rounded-full bg-meta-6 px-1 py-1 pr-2 text-white">Login</button>
              </NavLink>
            </div>
         
            {/* <div>
            <button type="submit" className="flex font-medium w-30 mt-1 text-xs justify-center rounded-full bg-meta-6 px-1 py-1 pr-2 text-white">Signup</button>
            </div> */}
          </div>
        </div>
        </div>
      </nav>
      <div>
        <img src={banner} alt="banner" className="w-full max-h-59 object-cover"/>

      </div>
      <div className="container mx-auto mt-4">
        <h1 className="text-xl text-black font-bold">Today's Result</h1>
        {apiData && (   
<div className="flex justify-between">
<div class="mt-5 w-full max-w-sm  bg-white border-2 border-meta-6 rounded-lg shadow  ">
<div className="bg-meta-6">
  <h1 className="text-white font-bold text-center p-5 text-2xl">{apiData.marketName}</h1>
</div>
<div className="p-4 text-center">
  <h1 className="text-xl m-5">{apiData.randomNumber}</h1>
</div>
<div className="bg-meta-6">
  <h1 className="text-white font-bold text-center p-2 text-xl">on time {apiData.createdAt}</h1>
</div>

</div>



</div>
)}
</div>
      
    </div>
  );
};

export default Landing;
