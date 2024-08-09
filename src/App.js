import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/list/list";
import Hotel from "./pages/hotel/Hotel";
import AboutUs from "./pages/aboutUs/AboutUs";
import RegistrationForm from "./pages/registrationForm/RegistrationForm";
import LoginForm from "./pages/loginForm/LoginForm";
import ContactUs from "./pages/contactUs/ContactUs";
import HotelPage from "./pages/hotelPage/hotelPage";
import BookingPage from "./pages/booking/Booking";
import BookingList from "./pages/bookingList/BookingList";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Dashboard from "./pages/dashboard/dashboard"
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import HotelOwnerDashboard from './Components/HotelOwnerDashboard/HotelOwnerDashboard';
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoutes";
import HotelOwnerLogin from "./Components/HotelOwnerLogin/HotelOwnerLogin";
import ManageHotels from "./pages/ManageHotel/ManageHotel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/hotelpage" element={<HotelPage />} />
        <Route path="/booking/:hotelId/:roomType" element={<BookingPage />} />
        <Route path ="/bookings" element={<BookingList />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path = "/dashboard" element={<Dashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/hotel_owner-login" element={<HotelOwnerLogin />} />
        {/* <Route path="/hotel-owner-login" element={<HotelOwnerLogin />} /> */}
        <Route path="/admin-dashboard/*" element={<ProtectedRoute element={AdminDashboard} role="admin"/>} />
        <Route path="/hotel_owner-dashboard/*" element={<ProtectedRoute element={HotelOwnerDashboard} role="hotel_owner"/>} />
        <Route path="/manage-hotels" element={<ProtectedRoute element={ManageHotels} role="hotel_owner"/>} />
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
