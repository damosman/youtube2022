import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt=""
        className="searchImg"
      />
      <div className="searchItemDesc">
        <div className="searchTitle">Nordic Gold Apartments</div>
        <span className="searchItemDist">600m from City Centre</span>
        <span className="searchItemTaxi">
          Free pick up from Airport/Ferry Terminal
        </span>
        <span className="searchSubtitle">
          Three bedroom with Internet and Excellent Heating system
        </span>
        <span className="searchFeatures">
          Entire House * 2 bathrooms * 156sqm
        </span>
        <span className="searchCancel">Free Cancellation</span>
        <span className="searchItemCanSubs">
          You can cancel later, so make your bookings now
        </span>
      </div>
      <div className="searchItemDetails">
        <div className="searchItemRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchDetailsTexts">
          <span className="searchItemPrice">4390 SEK</span>
          <span className="searchItemTaxOp">Includes taxes and fees</span>
          <button className="searchItemCheckBtn">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
