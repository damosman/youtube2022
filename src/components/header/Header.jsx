import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faBed,
  faTaxi,
  faShop,
  faTruckMoving,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Rooms</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faHotel} />
            <span>Shortlet</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faShop} />
            <span>Stores</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi Service</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTruckMoving} />
            <span>Rental Truck</span>
          </div>
        </div>
        <h1 className="headerTitle">
          Find the perfect Accommodation with additional services
        </h1>
        <p className="headerDesc">
          Book or Rent the finest apartments and hotels in Scandinavia
        </p>
        <button className="headerBtn">Sign-in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="text"
              placeholder="What type of Rooms do you need?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span className="headerSearchText">date to date</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">
              3 rooms 2 rooms Studio Apartment
            </span>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
