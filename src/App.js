import Alexa from "./Components/Alexa";
import Banner from "./Components/Banner";
import TodayHotDeals from "./Components/TodayHotDeals";

function App() {
  return (
    <div className="container" >
      <Banner/>
      <Alexa/>
      <TodayHotDeals/>
    </div>
  );
}

export default App;
