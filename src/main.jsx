import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import DealsPage from "./pages/DealsPage";
import ReservationPage from "./pages/ReservationPage";
import BookYoursPage from "./pages/BookYoursPage"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/deals" element={<DealsPage />} />
      <Route path="/reservation" element={<ReservationPage />} />
      <Route path="/book-yours" element={<BookYoursPage />} />
    </Routes>
  </Router>
);