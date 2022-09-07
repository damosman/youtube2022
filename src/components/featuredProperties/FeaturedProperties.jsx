import './featuredProperties.css'

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img className="fpImg" src="https://images.unsplash.com/photo-1573830326465-7b0c5caf477b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
                <span className="fpName">VenusBostäder Apartments</span>
                <span className="fpCity">Stockholm</span>
                <span className="fpPrice">Starting from 10000SEK</span>
                <div className="fpRating">
                    <button>7.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" src="https://images.unsplash.com/photo-1567899482751-c8647fda8155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                <span className="fpName">Mars Hotels</span>
                <span className="fpCity">Göteborg</span>
                <span className="fpPrice">Starting from 7500SEK</span>
                <div className="fpRating">
                    <button>8.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                <span className="fpName">NordicPremium Hotels</span>
                <span className="fpCity">Malmö</span>
                <span className="fpPrice">Starting from 5000SEK</span>
                <div className="fpRating">
                    <button>7.5</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>)
}

export default FeaturedProperties;