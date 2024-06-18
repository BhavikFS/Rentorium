import Header from "./layout/header/Header";
import SignUpPage from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/common/common.css";
import Home from "./pages/Home";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
