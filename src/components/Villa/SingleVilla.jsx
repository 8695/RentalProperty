import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../villas";
import { 
  FaMapMarkerAlt, 
  FaBed, 
  FaUsers, 
  FaBath, 
  FaRulerCombined, 
  FaSignInAlt, 
  FaSignOutAlt, 
  FaMapMarkedAlt,
  FaWifi,
  FaSwimmingPool,
  FaTv,
  FaUtensils,
  FaParking,
  FaSnowflake,
  FaFire,
  FaTshirt
} from "react-icons/fa";
import "./SingleVilla.css";

const SingleVilla = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const filteredVilla = villas.find((villa) => villa.id === numericId);
  const [activeImage, setActiveImage] = useState(0);
  
  // Sample images for gallery
  const galleryImages = [
    filteredVilla.image,
    "/landing.jpg",
    "/people.jpg",
    "/people2.jpg",
    "/villa10.jpg"
  ];

  if (!filteredVilla) {
    return <div className="villa-not-found">Villa not found</div>;
  }

  return (
    <div className="single-villa-page">
      <div className="villa-hero">
        <div className="villa-hero-content">
          <h1 className="villa-title">{filteredVilla.name}</h1>
          <p className="villa-location">
            <FaMapMarkerAlt /> {filteredVilla.location}
          </p>
        </div>
      </div>

      <div className="villa-container">
        <div className="villa-gallery">
          <div className="main-image">
            <img 
              src={galleryImages[activeImage]} 
              alt={filteredVilla.name} 
            />
          </div>
          <div className="image-thumbnails">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={img} alt={`Villa view ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="villa-details">
          <div className="specs-grid">
            <div className="spec-item">
              <div className="spec-icon">
                <FaBed />
              </div>
              <div className="spec-info">
                <span className="spec-value">{filteredVilla.bedrooms || 3}</span>
                <span className="spec-label">Bedrooms</span>
              </div>
            </div>
            <div className="spec-item">
              <div className="spec-icon">
                <FaUsers />
              </div>
              <div className="spec-info">
                <span className="spec-value">{filteredVilla.guests}</span>
                <span className="spec-label">Guests</span>
              </div>
            </div>
            <div className="spec-item">
              <div className="spec-icon">
                <FaBath />
              </div>
              <div className="spec-info">
                <span className="spec-value">{filteredVilla.bathrooms}</span>
                <span className="spec-label">Bathrooms</span>
              </div>
            </div>
            <div className="spec-item">
              <div className="spec-icon">
                <FaRulerCombined />
              </div>
              <div className="spec-info">
                <span className="spec-value">{filteredVilla.squareMeter}</span>
                <span className="spec-label">m² Area</span>
              </div>
            </div>
          </div>

          <div className="check-in-out">
            <div className="check-time">
              <div className="check-icon">
                <FaSignInAlt />
              </div>
              <div className="check-info">
                <h4>Check In</h4>
                <p>9:00 AM</p>
              </div>
            </div>
            <div className="check-time">
              <div className="check-icon">
                <FaSignOutAlt />
              </div>
              <div className="check-info">
                <h4>Check Out</h4>
                <p>11:00 PM</p>
              </div>
            </div>
          </div>

          <div className="description">
            <h3>About This Villa</h3>
            <p>
              Experience luxury living in this beautiful {filteredVilla.bedrooms || 3}-bedroom villa 
              located in the heart of {filteredVilla.location}. Perfect for families and groups, 
              this property offers stunning views, modern amenities, and a spacious layout 
              designed for comfort and relaxation.
            </p>
          </div>

          <div className="amenities">
            <h3>Amenities</h3>
            <div className="amenities-grid">
              <div className="amenity-item"><FaWifi /> WiFi</div>
              <div className="amenity-item"><FaSwimmingPool /> Pool</div>
              <div className="amenity-item"><FaTv /> Smart TV</div>
              <div className="amenity-item"><FaUtensils /> Kitchen</div>
              <div className="amenity-item"><FaParking /> Parking</div>
              <div className="amenity-item"><FaSnowflake /> A/C</div>
              <div className="amenity-item"><FaFire /> Heating</div>
              <div className="amenity-item"><FaTshirt /> Washer</div>
            </div>
          </div>
        </div>
      </div>

      <div className="location-section">
        <div className="location-header">
          <h3><FaMapMarkedAlt /> Location</h3>
          <p>Find us easily with the map below</p>
        </div>
        <div className="map-container">
          <iframe
            title="Villa location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1643031638553!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SingleVilla;