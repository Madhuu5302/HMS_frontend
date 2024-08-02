import "./featured.css"
function Featured() {
    return ( 
    <div className="featured">
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1578458329607-534298aebc4d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt ="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Goa</h1>
          </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt ="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Kerala</h1>
          </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1453144971285-7232b65b0051?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt ="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>TamilNadu</h1>
          </div>
        </div>
    </div>
     );
}

export default Featured;