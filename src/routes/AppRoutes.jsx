import { Route, Routes } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import Login from "@/app/auth/Login";
import ForgotPassword from "@/app/auth/ForgotPassword";
import Maintenance from "@/components/common/Maintenance";
import ProtectedRoute from "./ProtectedRoute";

import NotFound from "@/app/errors/NotFound";
import Home from "@/app/home/Home";
import DayBookReport from "@/app/dayBook/DayBookReport";
import TrialBalanceReport from "@/app/trialBalance/TrialBalanceReport";
import LedgerReport from "@/app/ledger/LedgerReport";
import EditDayBook from "@/app/dayBook/EditDayBook";
import AddDayBook from "@/app/dayBook/AddDayBook";
import ChangeLedger from "@/app/changeLedger/ChangeLedger";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthRoute />}>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Route>

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/edit-daybook" element={<EditDayBook />} />
        <Route path="/add-daybook" element={<AddDayBook />} />
        <Route path="/day-book" element={<DayBookReport />} />
        <Route path="/ledger" element={<LedgerReport />} />
        <Route path="/change-ledger-name" element={<ChangeLedger />} />
        <Route path="/trial-balance" element={<TrialBalanceReport />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
