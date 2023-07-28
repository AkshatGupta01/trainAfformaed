import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TrainList from "./pages/TrainList";
import PageNotFound from "./pages/PageNotFound";
import trains from "../src/constants/trains.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/train-list" element={<TrainList trains={trains} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
