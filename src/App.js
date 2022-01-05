import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import TradeExchange from "./Components/TradeExchange/TradeExchange";
import './App.css'
import LiquidityListing from "./Components/TradeLiquidity/LiquidityListing";

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Home/> */}
     {/* <TradeExchange/> */}
     <LiquidityListing/>
     <Footer/>
    </div>
  );
}

export default App;
