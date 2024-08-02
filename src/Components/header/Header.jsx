import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faHouse, faLocationDot, faPerson,faInfoCircle,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import {DateRange} from 'react-date-range';
import {useState} from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format } from "date-fns";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function Header({type}) {
    const [destination, setDestination] = useState(""); 
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
    
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch =()=>{
        navigate("/hotels",{state:{destination,date,options}})
    }

    const redirectToHome = () => {
        navigate('/');
    };

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode": "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem" onClick={redirectToHome}>
                        <FontAwesomeIcon icon={faHouse} />
                        <span>Home</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <Link to="/hotelpage">
                            <span>Hotels</span>
                        </Link>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <Link to="/bookings">
                        <span>Bookings</span>
                        </Link>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faInfoCircle} />
                        <Link to="/about-us">
                            <span>About Us</span>
                        </Link>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <Link to="/contact-us">
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>
                { type !== "list" &&
                <>
                    <h1 className="headerTitle">Book your perfect escape!</h1>
                    <p className="headerDesc">Celebrate serenity and 
                    discover your perfect escape amidst luxury and comfort. Book your retreat now!</p>
                    {/* <button className="headerBtn">BOOK NOW</button> */}
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faLocationDot} className='headerIcon' />
                            <input type="text" placeholder='Enter search location' className='headerSearchInput' onChange={e => setDestination(e.target.value)} />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                            <span
                                onClick={() => setOpenDate(!openDate)}
                                className="headerSearchText"
                            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                                date[0].endDate,
                                "dd/MM/yyyy"
                            )}`}</span>
                            {openDate && (
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />
                            )}
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                            <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>
                                {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                            </span>
                            {openOptions && (<div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                                        <div className="optionCounterNumber">{options.adult}</div>
                                        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                                        <div className="optionCounterNumber">{options.children}</div>
                                        <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                        <div className="optionCounterNumber">{options.room}</div>
                                        <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                        <div className="headerSearchItem">
                            <button className="searchBtn" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    );
}

export default Header;