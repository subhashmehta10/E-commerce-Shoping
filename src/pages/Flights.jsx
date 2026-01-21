import React, { useState } from 'react';
import './Flights.css';

const destinations = [
    {
        id: 1,
        name: 'Bali, Indonesia',
        price: 'Start from ₹15,999',
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
        tag: 'International'
    },
    {
        id: 2,
        name: 'Dubai, UAE',
        price: 'Start from ₹12,499',
        img: 'https://images.unsplash.com/photo-1512453979798-5ea904acfb5a?auto=format&fit=crop&w=600&q=80',
        tag: 'Trending'
    },
    {
        id: 3,
        name: 'Paris, France',
        price: 'Start from ₹45,999',
        img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
        tag: 'Romantic'
    },
    {
        id: 4,
        name: 'London, UK',
        price: 'Start from ₹52,499',
        img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
        tag: 'Popular'
    },
    {
        id: 5,
        name: 'Tokyo, Japan',
        price: 'Start from ₹38,999',
        img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80',
        tag: 'Adventure'
    },
    {
        id: 6,
        name: 'New York, USA',
        price: 'Start from ₹65,999',
        img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80',
        tag: 'Metropolis'
    },
    {
        id: 7,
        name: 'Singapore',
        price: 'Start from ₹22,999',
        img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80',
        tag: 'Shopping'
    },
    {
        id: 8,
        name: 'Sydney, Australia',
        price: 'Start from ₹55,999',
        img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80',
        tag: 'Beaches'
    },
    {
        id: 9,
        name: 'Goa, India',
        price: 'Start from ₹3,999',
        img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
        tag: 'Domestic'
    },
    {
        id: 10,
        name: 'Bangkok, Thailand',
        price: 'Start from ₹11,999',
        img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80',
        tag: 'Best Seller'
    },
    {
        id: 11,
        name: 'Maldives',
        price: 'Start from ₹25,999',
        img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80',
        tag: 'Honeymoon'
    },
    {
        id: 12,
        name: 'Santorini, Greece',
        price: 'Start from ₹48,999',
        img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80',
        tag: 'Scenic'
    }
];

const offers = [
    {
        id: 1,
        title: 'Flat 12% OFF',
        desc: 'On domestic flights with HDFC Bank Cards',
        code: 'HDFC12'
    },
    {
        id: 2,
        title: 'International Sale',
        desc: 'Up to ₹5000 off on international bookings',
        code: 'INTL5000'
    },
    {
        id: 3,
        title: 'New User Offer',
        desc: 'Get flat ₹500 off on your first booking',
        code: 'FLYNEW'
    }
];

const searchResults = [
    {
        id: 1,
        airline: 'Indigo',
        code: '6E-453',
        departure: '06:00',
        arrival: '08:15',
        duration: '2h 15m',
        price: 4500,
        stops: 'Non-stop',
        logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=100&q=60'
    },
    {
        id: 2,
        airline: 'Air India',
        code: 'AI-809',
        departure: '09:00',
        arrival: '13:10',
        duration: '4h 10m',
        price: 12200,
        stops: '1 Stop',
        logo: 'https://images.unsplash.com/photo-1542296332-2e44a99cfef0?auto=format&fit=crop&w=100&q=60'
    },
    {
        id: 3,
        airline: 'Emirates',
        code: 'EK-501',
        departure: '10:30',
        arrival: '14:45',
        duration: '4h 15m',
        price: 18500,
        stops: 'Non-stop',
        logo: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=100&q=60'
    },
    {
        id: 4,
        airline: 'Vistara',
        code: 'UK-992',
        departure: '14:30',
        arrival: '16:45',
        duration: '2h 15m',
        price: 6100,
        stops: 'Non-stop',
        logo: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=100&q=60'
    },
    {
        id: 5,
        airline: 'British Airways',
        code: 'BA-112',
        departure: '02:00',
        arrival: '12:00',
        duration: '10h 30m',
        price: 42000,
        stops: 'Non-stop',
        logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=100&q=60'
    },
    {
        id: 6,
        airline: 'Singapore Airlines',
        code: 'SQ-421',
        departure: '23:00',
        arrival: '07:00',
        duration: '5h 30m',
        price: 26000,
        stops: 'Non-stop',
        logo: 'https://images.unsplash.com/photo-1542296332-2e44a99cfef0?auto=format&fit=crop&w=100&q=60'
    }
];

const airports = [
    { city: "New Delhi", code: "DEL", name: "Indira Gandhi International Airport" },
    { city: "Mumbai", code: "BOM", name: "Chhatrapati Shivaji International Airport" },
    { city: "Bangalore", code: "BLR", name: "Kempegowda International Airport" },
    { city: "Chennai", code: "MAA", name: "Chennai International Airport" },
    { city: "Kolkata", code: "CCU", name: "Netaji Subhas Chandra Bose Airport" },
    { city: "Hyderabad", code: "HYD", name: "Rajiv Gandhi International Airport" },
    { city: "Pune", code: "PNQ", name: "Pune Airport" },
    { city: "Goa", code: "GOI", name: "Dabolim Airport" },
    { city: "Dubai", code: "DXB", name: "Dubai International Airport" },
    { city: "London", code: "LHR", name: "Heathrow Airport" },
    { city: "New York", code: "JFK", name: "John F. Kennedy International Airport" },
    { city: "Singapore", code: "SIN", name: "Changi Airport" },
    { city: "Bangkok", code: "BKK", name: "Suvarnabhumi Airport" },
    { city: "Tokyo", code: "NRT", name: "Narita International Airport" },
    { city: "Paris", code: "CDG", name: "Charles de Gaulle Airport" },
    { city: "Bali", code: "DPS", name: "Ngurah Rai International Airport" },
    { city: "Sydney", code: "SYD", name: "Kingsford Smith Airport" },
    { city: "Istanbul", code: "IST", name: "Istanbul Airport" },
    { city: "Doha", code: "DOH", name: "Hamad International Airport" },
    { city: "Kuala Lumpur", code: "KUL", name: "Kuala Lumpur International Airport" }
];

const Flights = () => {
    const [tripType, setTripType] = useState('oneWay');
    const [showResults, setShowResults] = useState(false);
    const [fromCity, setFromCity] = useState("");
    const [toCity, setToCity] = useState("");
    const [results, setResults] = useState([]);

    const getAirportDetails = (cityName) => {
        const airport = airports.find(a => a.city.toLowerCase() === cityName.toLowerCase());
        return airport ? `${airport.code}, ${airport.name}` : "Select valid city";
    };

    const handleSearch = () => {
        if (!fromCity || !toCity) {
            alert("Please select both departure and arrival cities.");
            return;
        }
        setShowResults(true);
        // Simulate fetching flights between selected cities
        const mockFlights = searchResults.map(flight => ({
            ...flight,
            id: Math.random(), // New IDs for new search
            price: Math.floor(flight.price * (0.8 + Math.random() * 0.4)) // Randomize price slightly
        }));
        setResults(mockFlights);
    };

    return (
        <div className="flights-page">
            <section className="flights-hero">
                <div className="hero-content">
                    <h1 className="hero-title">Explore the World</h1>
                    <p className="hero-subtitle">Search deals on hotels, homes, and much more...</p>

                    <div className="flight-search-widget">
                        <datalist id="airportOptions">
                            {airports.map((airport) => (
                                <option key={airport.code} value={airport.city}>{airport.code} - {airport.name}</option>
                            ))}
                        </datalist>

                        <div className="trip-type-tabs">
                            <div
                                className={`trip-tab ${tripType === 'oneWay' ? 'active' : ''}`}
                                onClick={() => setTripType('oneWay')}
                            >
                                <div className="radio-circle"></div> One Way
                            </div>
                            <div
                                className={`trip-tab ${tripType === 'roundTrip' ? 'active' : ''}`}
                                onClick={() => setTripType('roundTrip')}
                            >
                                <div className="radio-circle"></div> Round Trip
                            </div>
                            <div
                                className={`trip-tab ${tripType === 'multiCity' ? 'active' : ''}`}
                                onClick={() => setTripType('multiCity')}
                            >
                                <div className="radio-circle"></div> Multi City
                            </div>
                        </div>

                        <div className="search-inputs-row">
                            <div className="input-group">
                                <label className="input-label">From</label>
                                <input
                                    type="text"
                                    className="input-value"
                                    value={fromCity}
                                    onChange={(e) => setFromCity(e.target.value)}
                                    list="airportOptions"
                                    placeholder="Enter City"
                                />
                                <span className="input-subtext">{getAirportDetails(fromCity)}</span>
                                <div className="swap-btn" onClick={() => {
                                    const temp = fromCity;
                                    setFromCity(toCity);
                                    setToCity(temp);
                                }}>⇄</div>
                            </div>

                            <div className="input-group">
                                <label className="input-label">To</label>
                                <input
                                    type="text"
                                    className="input-value"
                                    value={toCity}
                                    onChange={(e) => setToCity(e.target.value)}
                                    list="airportOptions"
                                    placeholder="Enter City"
                                />
                                <span className="input-subtext">{getAirportDetails(toCity)}</span>
                            </div>

                            <div className="input-group">
                                <label className="input-label">Departure</label>
                                <input type="date" className="input-value" />
                                <span className="input-subtext">Select Date</span>
                            </div>

                            <div className="input-group">
                                <label className="input-label">Return</label>
                                <input type="date" className="input-value" disabled={tripType === 'oneWay'} />
                                <span className="input-subtext">{tripType === 'oneWay' ? 'Tap to add return' : 'Select Date'}</span>
                            </div>

                            <div className="input-group">
                                <label className="input-label">Travellers & Class</label>
                                <input type="text" className="input-value" defaultValue="1 Traveller" readOnly />
                                <span className="input-subtext">Economy</span>
                            </div>

                            <button className="search-btn" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flights-container">
                {showResults && (
                    <div className="flight-results-section">
                        <div className="section-head">
                            <h2 className="section-title">Available Flights</h2>
                            <p className="section-subtitle">Flights from {fromCity} to {toCity}</p>
                        </div>
                        <div className="flight-results-list">
                            {results.map(flight => (
                                <div className="flight-result-card" key={flight.id} style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 2fr 1fr 1fr',
                                    alignItems: 'center',
                                    background: 'white',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    marginBottom: '1rem',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ width: '40px', height: '40px', background: '#f1f5f9', borderRadius: '50%', overflow: 'hidden' }}>
                                            {/* Placeholder logo */}
                                            <img src={flight.logo} alt={flight.airline} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div>
                                            <h4 style={{ margin: 0, fontSize: '1rem', color: '#1e293b' }}>{flight.airline}</h4>
                                            <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>{flight.code}</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', textAlign: 'center' }}>
                                        <div>
                                            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b' }}>{flight.departure}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{fromCity}</div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{flight.duration}</span>
                                            <div style={{ width: '100px', height: '2px', background: '#cbd5e1', position: 'relative' }}>
                                                <div style={{ width: '6px', height: '6px', background: '#cbd5e1', borderRadius: '50%', position: 'absolute', left: 0, top: '-2px' }}></div>
                                                <div style={{ width: '6px', height: '6px', background: '#cbd5e1', borderRadius: '50%', position: 'absolute', right: 0, top: '-2px' }}></div>
                                            </div>
                                            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{flight.stops}</span>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1e293b' }}>{flight.arrival}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{toCity}</div>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a' }}>₹{flight.price.toLocaleString()}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>per traveller</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <button style={{
                                            background: '#ea580c',
                                            color: 'white',
                                            border: 'none',
                                            padding: '0.75rem 1.5rem',
                                            borderRadius: '8px',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            boxShadow: '0 2px 4px rgba(234, 88, 12, 0.2)'
                                        }}>Book Now</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="section-head">
                    <h2 className="section-title">Exclusive Offers</h2>
                    <p className="section-subtitle">Best deals for your next adventure</p>
                </div>

                <div className="flight-offers-row">
                    {offers.map(offer => (
                        <div className="offer-card" key={offer.id}>
                            <div className="offer-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            </div>
                            <div className="offer-content">
                                <h4>{offer.title}</h4>
                                <p>{offer.desc}</p>
                                <span className="offer-code">{offer.code}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="section-head">
                    <h2 className="section-title">Popular Destinations</h2>
                    <p className="section-subtitle">Handpicked holidays for you</p>
                </div>

                <div className="destinations-grid">
                    {destinations.map(dest => (
                        <div className="destination-card" key={dest.id}>
                            <div className="dest-badge">{dest.tag}</div>
                            <img src={dest.img} alt={dest.name} className="dest-img" />
                            <div className="dest-overlay">
                                <h3 className="dest-name">{dest.name}</h3>
                                <div className="dest-price">{dest.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Flights;
