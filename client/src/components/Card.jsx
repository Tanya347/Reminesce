import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { useEffect } from "react";

function Card(props) {


  return (
    <div class="actionCard" data-aos="fade-left"> 
      <div className="actionElement">
        <div className="actionDetails">
          <img src={props.src} alt="" />
          <p>{props.para}</p>
          <Link to={`/${props.link}`}>
            <button>{props.button}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;