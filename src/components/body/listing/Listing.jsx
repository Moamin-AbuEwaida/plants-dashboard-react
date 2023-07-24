import React from "react";
import "./listing.scss";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Plants1 from "../../../assets/plants1.png";
import Plants2 from "../../../assets/plants2.png";
import Plants3 from "../../../assets/plants3.png";
import Plants4 from "../../../assets/plants4.png";
import User2 from "../../../assets/user2.jpg";
import User3 from "../../../assets/user3.jpg";
import User4 from "../../../assets/user4.jpg";
import User5 from "../../../assets/user5.jpg";
import User6 from "../../../assets/user6.jpg";
import User7 from "../../../assets/user7.jpg";
import User8 from "../../../assets/user8.jpg";
import User9 from "../../../assets/user9.jpg";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={Plants1} alt="Image name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={Plants2} alt="Image name" />
          <h3>Coffee Plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={Plants3} alt="Image name" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={Plants4} alt="Image name" />
          <h3>Spider Plant</h3>
        </div>
      </div>
      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers </h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={User2} alt="User2" />
              <img src={User3} alt="User3" />
              <img src={User4} alt="User4" />
              <img src={User5} alt="User5" />
            </div>
            <div className="cardText">
              <span>
                14.43 Plant sold <br />
                <small>
                  21 sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers </h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={User6} alt="User6" />
              <img src={User7} alt="User7" />
              <img src={User8} alt="User8" />
              <img src={User9} alt="User9" />
            </div>
            <div className="cardText">
              <span>
                30.13 Plant sold <br />
                <small>
                  26 sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
