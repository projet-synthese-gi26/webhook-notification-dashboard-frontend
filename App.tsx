import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AgencyProvider } from "./context/AgencyContext";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import NotificationsPage from "./pages/NotificationsPage";
import ReservationsPage from "./pages/ReservationsPage";

const App: React.FC = () => {
  return (
    <AgencyProvider>
      {/*
        BrowserRouter avec basename="/admin" :
        - https://mondomaine.com/admin        → DashboardPage
        - https://mondomaine.com/admin/notifications → NotificationsPage
        - https://mondomaine.com/admin/reservations  → ReservationsPage
      */}
      <BrowserRouter basename="/admin">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="reservations" element={<ReservationsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AgencyProvider>
  );
};

export default App;
