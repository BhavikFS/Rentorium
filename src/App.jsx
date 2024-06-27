import Header from "./layout/header/Header";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/common/common.css";
import Home from "./pages/Home";
import ForgotPasswordPage from "./pages/ForgotPassword";
import AboutUsPage from "./pages/AboutUs";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
