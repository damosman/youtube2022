import './hotel.css'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowRight,
  faCircleArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [{
    src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }, {
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    src: "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
  }, {
    src: "https://images.unsplash.com/photo-1629236714902-e1926e8ab314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  }, {
    src: "https://images.unsplash.com/photo-1618236444666-105ec54b5b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
  }, {
    src: "https://images.unsplash.com/photo-1653547782501-9cf4884564ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  }];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true)
  }
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="hotelSlider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)
          } />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImage" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now</button>
          <h1 className="hotelTitle">Mars Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              Eddan Vikinavågen
            </span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 1km from City center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over 1999 SEK a night room at this hotel and get a free taxi to Malmö
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper'>
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className="hotelTitle">Stay in the heart of Malmö</h1>
              <p className="hotelDesc">
                Located a 20-minutes walk from Central station in Malmö, Mars Hotel has excellent accommodation with energy-efficient heating systems and free WiFi. The rooms comes with hardwood floors and a well equipped kitchenette with a private Bathroom with shower, bathtub and a hairdryer. Popular point of interests include the Emporia Shopping Center, Turning Torso, Kungsparken, Slottstradgardens Kafe.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 7-night stay!</h1>
              <span>
                Located in the real heart of Malmö, this hotel property has an excellent location score of 9.0!
              </span>
              <h2>
                <b>13993 SEK</b> (7 nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div >
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;