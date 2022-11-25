import { Fragment } from "react";
import Alexa from "./Components/Alexa";
import Banner from "./Components/Banner";
import DealsOnFurniture from "./Components/DealsOnFurniture";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Rectangle from "./Components/Rectangle";
import TodayHotDeals from "./Components/TodayHotDeals";
import YourSearchedItems from "./Components/YourSearchedItems";

function App() {
  return (
    <Fragment>

    <section className="container" >
      <Navbar/>
      <Banner/>
      <Alexa/>
      <TodayHotDeals/>
      <YourSearchedItems/>
      <Rectangle/>
      <DealsOnFurniture/>
    </section>
    <Footer/>
    </Fragment>

  );
}

export default App;
