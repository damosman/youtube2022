import './featured.css'

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img 
        src="https://images.unsplash.com/photo-1519245856048-c9ca2bc667f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" 
        alt=""
        className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Stockholm</h1>
          <h2>VenusBostäder Apartments</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img 
        src="https://images.unsplash.com/photo-1544166829-49960080435f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" 
        alt=""
        className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Göteborg</h1>
          <h2>Mars Hotels</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img 
        src="https://images.unsplash.com/photo-1613930136425-ebb34f8654cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
        alt=""
        className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Malmö</h1>
          <h2>NordicPremium Hotels</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured