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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
