import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import QByAstonMartinPage from "./pages/QByAstonMartinPage";
import InquirePage from "./pages/InquirePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/q-by-aston-martin" element={<QByAstonMartinPage />} />
      <Route path="/inquire" element={<InquirePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
