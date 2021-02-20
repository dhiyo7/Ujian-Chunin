import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import DaftarSoal from "../src/pages/DaftarSoal";
import DaftarSoalWeekDua from "../src/pages/DaftarSoalWeekDua";
import Guide from "../src/pages/Guide";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/weeksatu" exact component={DaftarSoal} />
      <Route path="/weekdua" exact component={DaftarSoalWeekDua} />
      <Route path="/guide" exact component={Guide} />
    </BrowserRouter>
  );
}

export default App;
