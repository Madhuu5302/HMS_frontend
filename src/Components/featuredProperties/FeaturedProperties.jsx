import "./featuredProperties.css";

function FeaturedProperties() {
    return ( 
            <div className="fp">
              <div className="fpItem">
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">Azure Haven Resorts</span>
                <span className="fpCity">Goa</span>
                <span className="fpPrice">Starting from Rs. 3500</span>
                <div className="fpRating">
                  <button>9.6</button>
                  <span>Exceptional</span>
                </div>
              </div>
              <div className="fpItem">
                <img
                  src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">Radisson Blu</span>
                <span className="fpCity">Bengaluru</span>
                <span className="fpPrice">Starting from Rs. 4300</span>
                <div className="fpRating">
                  <button>9.8</button>
                  <span>Exceptional</span>
                </div>
              </div>
              <div className="fpItem">
                <img
                  src="https://images.pexels.com/photos/5490747/pexels-photo-5490747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">Four Seasons Hotel</span>
                <span className="fpCity">Mumbai</span>
                <span className="fpPrice">Starting from Rs. 2700</span>
                <div className="fpRating">
                  <button>9.8</button>
                  <span>Exceptional</span>
                </div>
              </div>
              <div className="fpItem">
                <img
                  src="https://images.pexels.com/photos/2416472/pexels-photo-2416472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">Tranquil Pines Resort</span>
                <span className="fpCity">Shimla</span>
                <span className="fpPrice">Starting from Rs. 6000</span>
                <div className="fpRating">
                  <button>9.7</button>
                  <span>Exceptional</span>
                </div>
              </div>
              <div className="fpItem">
                <img
                  src="https://images.pexels.com/photos/1488327/pexels-photo-1488327.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">Hilton Garden Inn</span>
                <span className="fpCity">Kerala</span>
                <span className="fpPrice">Starting from Rs.5000</span>
                <div className="fpRating">
                  <button>9.8</button>
                  <span>Exceptional</span>
                </div>
              </div>
            </div>
          );
}

export default FeaturedProperties;