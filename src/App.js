import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import DaftarSoal from "../src/pages/DaftarSoal";
import Guide from "../src/pages/Guide";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/weeksatu" component={DaftarSoal} />
      <Route path="/guide" component={Guide} />
    </BrowserRouter>
  );
}

export default App;
