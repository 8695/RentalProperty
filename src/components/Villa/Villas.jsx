import React from 'react'
import {villas} from '../../villas';
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Villas = () => {
  return (
    <>
     <div className="villas-page">

      <div className="villas-hero">
        <div className="villas-hero-content">
          <h1>Discover Luxury Villas</h1>
          <p>Experience the finest vacation rentals with premium amenities</p>
        </div>
      </div>

      <div className="villas-container">
        <div className="villas-header">
          <div className="villas-title-section">
            <h2>All Luxury Villas</h2>
            <p>{villas.length} Premium Properties Available</p>
          </div>
          
          <div className="filter-section">
            <div className="filter-buttons">
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Beachfront</button>
              <button className="filter-btn">Mountain</button>
              <button className="filter-btn">Luxury</button>
            </div>
          </div>
        </div>
          <div className="villasContainer">
        {villas.map((element) => {
          return (
              <Link to={`/villa/${element.id}`} className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <div className="location_text">
                  <span>{element.location}</span>
                  <span>
                    <RxDot />
                  </span>
                  <span>{element.category}</span>
                </div>
                <div className="title_text">{element.name}</div>
                <div className="specifications">
                  <div className="spec">
                    <IoIosPeople />
                    <span>{element.guests}</span>
                    Guests
                  </div>
                  <div className="spec">
                    <FaBed />
                    <span>{element.bedrooms}</span>
                    Bedrooms
                  </div>
                  <div className="spec">
                    <BiArea />
                    <span>{element.squareMeter}</span>
                    Area
                  </div>
                  <div className="spec">
                    <FaBath />
                    <span>{element.bathrooms}</span>
                    Bathrooms
                  </div>
                </div>
                <div className="badge">
                  From <span>Rs.{element.dailyRent} / Day </span>
                </div>
              </Link>
          );
        })}
      </div>
        </div>
    </div>
    </>
  )
}

export default Villas