import "./propertyList.css"
function PropertyList() {
    return ( 
        <div className="pList">
            <div className="pListItem">
                <img src ="https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt ='' className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                </div>
            </div>
            <div className="pListItem">
                <img src ="https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt ='' className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                </div>
            </div>
            <div className="pListItem">
                <img src ="https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt ='' className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                </div>
            </div>
            
        </div>
        
     );
}

export default PropertyList;