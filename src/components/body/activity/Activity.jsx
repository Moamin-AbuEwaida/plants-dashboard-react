import React from "react";
import "./activity.scss";
import { BsArrowRightShort } from "react-icons/bs";
import User6 from "../../../assets/user6.jpg";
import User4 from "../../../assets/user4.jpg";
import User9 from "../../../assets/user9.jpg";
import User10 from "../../../assets/user10.jpg";
import User11 from "../../../assets/user11.jpg";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={User6} alt="customer image" />
          <div className="customerDetials">
            <span className="name">Samantha Martinez</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={User9} alt="customer image" />
          <div className="customerDetials">
            <span className="name">Samantha Martinez</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={User10} alt="customer image" />
          <div className="customerDetials">
            <span className="name">Samantha Martinez</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={User4} alt="customer image" />
          <div className="customerDetials">
            <span className="name">Samantha Martinez</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={User11} alt="customer image" />
          <div className="customerDetials">
            <span className="name">Samantha Martinez</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
