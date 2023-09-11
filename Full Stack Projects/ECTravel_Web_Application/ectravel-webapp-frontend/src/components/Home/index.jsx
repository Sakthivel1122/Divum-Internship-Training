import React from "react";
import "./Home.css";
import travelPic from "../../assets/images/home/travel-pic.jpg";
import NavBar from "../NavBar";
import place1 from "../../assets/images/home/popular_places/pic-1.jpg";
import place2 from "../../assets/images/home/popular_places/pic-2.jpg";
import place3 from "../../assets/images/home/popular_places/pic-3.webp";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="Home">
        <div className="travel-pic-container">
          <img className="travel-pic" src={travelPic} alt="Travel pic" />
          <div className="travel-description">
            <h1>Your Journey Your Story</h1>
            <p>Choose your Favourite Destination</p>
            <button>Get Started</button>
          </div>
        </div>
        {/* Services */}
        <div className="services container">
          <h1 className="title">Services</h1>
          <div className="services-content">
            <div className="service">
              <span class="material-symbols-outlined service-icon">
                location_on
              </span>
              <span className="service-name">Track Location</span>
            </div>
            <div className="service">
              <span class="material-symbols-outlined service-icon">
                airplane_ticket
              </span>
              <span className="service-name">Ticket Booking</span>
            </div>
            <div className="service">
              <span class="material-symbols-outlined service-icon">
                local_taxi
              </span>
              <span className="service-name">Taxi Booking</span>
            </div>
            <div className="service">
              <span class="material-symbols-outlined service-icon">hotel</span>
              <span className="service-name">Hotel Booking</span>
            </div>
            <div className="service">
              <span class="material-symbols-outlined service-icon">
                restaurant
              </span>
              <span className="service-name">Food Order</span>
            </div>
            <div className="service">
              <span class="material-symbols-outlined service-icon">tour</span>
              <span className="service-name">Ticket Booking</span>
            </div>
          </div>
        </div>
        {/* Popular Places */}
        <div className="popular-places container">
          <h1 className="title">Popular Places</h1>

          <div className="popular-place">
            <div className="place-details">
              <span>Thanjavur Periya kovil</span>
              <p>
                Brihadeeshwara Temple (Peruvudaiyar Kovil) is a Hindu temple
                dedicated to Shiva located in Thanjavur in the Indian state of
                Tamil Nadu. It is also known as Periya Kovil, RajaRajeswara
                Temple and Rajarajesvaram. It is one of the largest temples in
                India and is an example of Dravidian architecture during the
                Chola period. Built by emperor Raja Raja Chola I and completed
                in 1010 AD, the temple turned 1000 years old in 2010. The temple
                is part of the UNESCO World Heritage Site known as the “Great
                Living Chola Temples”, with the other two being the
                Brihadeeswarar Temple, Gangaikonda Cholapuram and Airavatesvara
                temple.
              </p>
            </div>
            <img className="place-img" src={place1} alt="place img" />
          </div>

          <div className="popular-place">
            <img className="place-img" src={place2} alt="place img" />
            <div className="place-details">
              <span>Kodaikanal</span>
              <p>
                Located in the state of Tamil Nadu, Kodaikanal is one of the
                most famous honeymoon destinations in India. A Lakeside resort
                town of Tamil Nadu, Kodaikanal has a beautiful climate,
                mist-covered manicured cliffs and waterfall that come together
                to create the ideal setting for a perfect getaway. Kodaikanal
                means 'the gift of the forests'.
              </p>
            </div>
          </div>

          <div className="popular-place">
            <div className="place-details">
              <span>Ooty</span>
              <p>
                Imagine waking up to a dreamlike sunrise over the misty
                mountains, spending a whole day hiking through lush woods and
                fishing in the blue waters of a serene lake. The Avalanche Lake
                in Ooty has that and more to offer to travellers looking to be
                lost in the beauty of nature.
              </p>
            </div>
            <img className="place-img" src={place3} alt="place img" />
          </div>
        </div>

        <footer>
          <div className="footer-container container">
            <div className="footer-wrapper">
            <div className="footer-content">
              <span>Quick Links</span>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Profile</li>
              </ul>
            </div>
            <div className="footer-content">
              <span>Services</span>
              <ul>
                <li>Track Location</li>
                <li>Ticket Booking</li>
                <li>Taxi Booking</li>
                <li>Hotel Booking</li>
                <li>Food Order</li>
                <li>Tour Planner</li>
              </ul>
            </div>
            <div className="footer-content">
              <span>Contact info</span>
              <ul>
                <li>+91 9344229677</li>
                <li>asakthivel1122@gmail.com</li>
                <li>Tamil Nadu</li>
              </ul>
            </div>
            <div className="footer-content">
              <span>Follow US</span>
              <ul>
                <li>FaceBook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Linked in</li>
              </ul>
            </div>
            </div>
          <span>
            Created by <span>Salthivel</span> | All Rights Reserved!
          </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;