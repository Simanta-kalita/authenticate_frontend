import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import EditTicketPage from "./pages/EditTicketPage/EditTicketPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditTicketPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </div>
  );
}

export default App;
