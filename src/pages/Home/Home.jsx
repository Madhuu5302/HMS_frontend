import Featured from "../../Components/featured/Featured";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import "./Home.css";
import PropertyList from "../../Components/propertyList/PropertyList";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";

function Home() {
    return ( 
       <div>
       <Navbar />
       <Header />
       <div className="homeContainer">
       <Featured /> 
       <h1 className="title">Browse by property</h1>
       <PropertyList />
       <h1 className="title">Most loved properties!</h1>
       <FeaturedProperties />
       <MailList />
       <Footer />
       </div>
       </div>
     );
}
export default Home;