import Alexa from "./Components/Alexa";
import Banner from "./Components/Banner";
import Rectangle from "./Components/Rectangle";
import TodayHotDeals from "./Components/TodayHotDeals";
import YourSearchedItems from "./Components/YourSearchedItems";

function App() {
  return (
    <div className="container" >
      <Banner/>
      <Alexa/>
      <TodayHotDeals/>
      <YourSearchedItems/>
      <Rectangle/>
    </div>
  );
}

export default App;
