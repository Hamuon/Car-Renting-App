import User from "./../../Assets/Icons/User.png";
import Wheel from "./../../Assets/Icons/Wheel.png";
import Car2 from "./../../Assets/Icons/Svg/Car3.svg";
import Gas from "./../../Assets/Icons/Gas.png";
import { Link } from "react-router-dom";
const Card = ({ ClickHandler, isLiked, id, title, rent }) => {
  return (
    <div className="w-96 bg-white p-5 rounded-xl mx-8 mb-12">
      <div className="flex-col w-full">
        <div className="flex justify-between items-center w-full">
          <h3 className=" font-normal text-lg">{title}</h3>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill={isLiked ? "#ED3F3F" : "white"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id={id}
              onClick={ClickHandler}
              d="M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z"
              stroke={isLiked ? "#ED3F3F" : "#90A3BF"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className=" font-light text-gray-400">sport</span>
      </div>
      <Link to={`/car/${id}`}>
        <div className="w-full flex justify-center items-center my-10">
          <img className="w-72 mt-2" alt="Car" src={Car2} />
        </div>
      </Link>

      <div className="flex justify-around pt-6 w-64">
        <div className="flex items-center justify-center">
          <img alt="gas" className="mr-1 w-4 h-4" src={Gas} />
          <span className="text-gray-400">90L</span>
        </div>
        <div className="flex items-center justify-center">
          <img alt="Wheel" className="mr-1 w-4 h-4" src={Wheel} />
          <span className="text-gray-400">Manual</span>
        </div>
        <div className="flex items-center justify-center">
          <img alt="User" className="mr-1 w-4 h-4" src={User} />
          <span className="text-gray-400">2 People</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center mr-5">
          <span className="font-bold text-xl">${rent}/ </span>
          <span className="ml-1 mt-1 font-bold text-gray-500"> day</span>
        </div>
        <button className="bg-blue-600 px-3 py-2 font-extralight rounded-md text-white hover:shadow-md ease-in-out duration-300">
          Rental Now
        </button>
      </div>
    </div>
  );
};

export default Card;
