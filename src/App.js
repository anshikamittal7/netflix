import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Home from "./Components/Home";

function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
