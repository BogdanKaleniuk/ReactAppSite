import "./App.css";
import Articles from "./components/Articles/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact={true} element={<Header />}></Route> */}
        <Route path="/" element={<Articles />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
