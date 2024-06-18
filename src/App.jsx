import Header from "./layout/header/Header";
import SignUpPage from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/register" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
