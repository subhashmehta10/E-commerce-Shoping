import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import CategoryBar from './components/CategoryBar';
import ServiceFeatures from './components/ServiceFeatures';
import FlashSale from './components/FlashSale';
import PromoBanner from './components/PromoBanner';
import BestSellers from './components/BestSellers';
import Brands from './components/Brands';
import Newsletter from './components/Newsletter';
import AutoSlider from './components/AutoSlider';
import CategoryRow from './components/CategoryRow';
import Wishlist from './pages/Wishlist';
import Mobiles from './pages/Mobiles';
import Appliances from './pages/Appliances';
import Electronics from './pages/Electronics';
import Fashion from './pages/Fashion';
import Beauty from './pages/Beauty';
import Grocery from './pages/Grocery';
import Furniture from './pages/Furniture';
import Flights from './pages/Flights';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FlashSaleDeals from './pages/FlashSaleDeals';
import AutumnCollection from './pages/AutumnCollection';
import Shop from './pages/Shop';
import NewArrivals from './pages/NewArrivals';
import MyProfile from './pages/MyProfile';
import ShopNovaPlus from './pages/ShopNovaPlus';
import Orders from './pages/Orders';
import ProductDetails from './pages/ProductDetails';
import TrackingPage from './pages/TrackingPage';
import Rewards from './pages/Rewards';
import GiftCards from './pages/GiftCards';
import AllCategories from './pages/AllCategories';
import HelpCenter from './pages/HelpCenter';
import OrderStatus from './pages/OrderStatus';
import ReturnsExchanges from './pages/ReturnsExchanges';
import ShippingInfo from './pages/ShippingInfo';
import ScrollToTop from './components/ScrollToTop';
import BecomeSeller from './pages/BecomeSeller';
import Advertise from './pages/Advertise';
import SellerRegistration from './pages/SellerRegistration';
import './index.css';
import './pages/Home.css';

const Home = () => (
  // ... (rest of Home component logic is unchanged, just showing context for the import)
  // Wait, I should import ScrollToTop at the top and add <ScrollToTop /> inside <Router>

  <main>
    <Hero />
    <AutoSlider />
    <ServiceFeatures />
    <FlashSale />
    <PromoBanner />

    <CategoryRow
      title="Furniture"
      viewAllLink="/category/furniture"
      items={[
        { title: "Sofas", offer: "From ₹5,299", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80" },
        { title: "Bean Bag", offer: "From ₹999", image: "https://images.unsplash.com/photo-1571198317078-d3a6813426cb?auto=format&fit=crop&w=300&q=80" },
        { title: "Office Chairs", offer: "From ₹2,490", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=300&q=80" },
        { title: "Recliner", offer: "From ₹9,999", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80" },
        { title: "Office Tables", offer: "From ₹2,999", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=300&q=80" },
        { title: "TV Units", offer: "From ₹1,999", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=300&q=80" },
        { title: "Beds", offer: "From ₹12,999", image: "https://images.unsplash.com/photo-1505693416388-b0346efee535?auto=format&fit=crop&w=300&q=80" },
        { title: "Wardrobes", offer: "From ₹6,499", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=300&q=80" },
        { title: "Shoe Racks", offer: "From ₹999", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=300&q=80" },
        { title: "Dining Sets", offer: "From ₹14,999", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=300&q=80" },
      ]}
    />

    <CategoryRow
      title="Beauty, Auto & More"
      viewAllLink="/category/beauty"
      items={[
        { title: "Car & Bike Accessories", offer: "Min 30% Off", image: "https://images.unsplash.com/photo-1580273916550-e323be2ed5fa?auto=format&fit=crop&w=300&q=80" },
        { title: "Baby Wipes", offer: "From ₹49", image: "https://images.unsplash.com/photo-1628108920150-1430d4a7732a?auto=format&fit=crop&w=300&q=80" },
        { title: "Health Supplements", offer: "Up to 70% Off", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80" },
        { title: "Perfumes", offer: "Min 50% Off", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=300&q=80" },
        { title: "Dry Fruits", offer: "Up to 65% Off", image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&w=300&q=80" },
        { title: "Toys", offer: "From ₹59", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=300&q=80" },
        { title: "Treadmills", offer: "Min 50% Off", image: "https://images.unsplash.com/photo-1576678927484-cd90203f90db?auto=format&fit=crop&w=300&q=80" },
        { title: "Musical Instruments", offer: "Up to 60% Off", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=300&q=80" },
        { title: "Stationery", offer: "From ₹49", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=300&q=80" },
        { title: "Pet Supplies", offer: "Min 40% Off", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=300&q=80" },
      ]}
    />
    <BestSellers />
    <Brands />
    <Newsletter />
  </main>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <AnnouncementBar />
        <Navbar />
        <CategoryBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/wishlist" element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          } />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/category/appliances" element={<Appliances />} />
          <Route path="/category/electronics" element={<Electronics />} />
          <Route path="/category/fashion" element={<Fashion />} />
          <Route path="/category/beauty" element={<Beauty />} />
          <Route path="/category/grocery" element={<Grocery />} />
          <Route path="/category/furniture" element={<Furniture />} />
          <Route path="/category/flights" element={<Flights />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/deals" element={<FlashSaleDeals />} />
          <Route path="/collection/autumn-2026" element={<AutumnCollection />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/new" element={<NewArrivals />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          } />
          <Route path="/plus" element={
            <ProtectedRoute>
              <ShopNovaPlus />
            </ProtectedRoute>
          } />
          <Route path="/orders" element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          } />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/track/:orderId" element={<TrackingPage />} />
          <Route path="/rewards" element={
            <ProtectedRoute>
              <Rewards />
            </ProtectedRoute>
          } />
          <Route path="/giftcards" element={
            <ProtectedRoute>
              <GiftCards />
            </ProtectedRoute>
          } />

          {/* Support Pages */}
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/returns" element={<ReturnsExchanges />} />
          <Route path="/shipping" element={<ShippingInfo />} />

          {/* Business Pages */}
          <Route path="/seller" element={<BecomeSeller />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/seller-register" element={<SellerRegistration />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App;
