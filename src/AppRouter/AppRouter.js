import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/DashBoard/DashBoard";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
// import Customers from "../../Pages/Customers";
// import Dashboard from "../../Pages/Dashbaord";
// import Inventory from "../../Pages/Inventory";
// import Orders from "../../Pages/Orders";
// import Userright from "../../Pages/Userright";
// import Reports from "../../Pages/Reports";
// import TrailBalance from "../../Pages/AnalyaticReports/trailbalance";
// import ComparisionTB from "../../Pages/AnalyaticReports/ComparisionTB";
// import SheduleTB from "../../Pages/AnalyaticReports/sheduleTB";
// import BalanceSheet from "../../Pages/AnalyaticReports/balancesheet";
// import ProfitLoss from "../../Pages/AnalyaticReports/profitloss";

// import CSRTrailBalance from "../../Pages/ConsolidatedReports/trailbalance";
// import CSRComparisionTB from "../../Pages/ConsolidatedReports/ComparisionTB";
// import CSRSheduleTB from "../../Pages/ConsolidatedReports/sheduleTB";
// import CSRBalanceSheet from "../../Pages/ConsolidatedReports/balancesheet";
// import CSRProfitLoss from "../../Pages/ConsolidatedReports/profitloss";





// // import AppReports from "../../Pages/Reports/mobileapp";
// // pavan 
// import MemberDetails from "../../Pages/MemberDetails";
// import AccountCreation from "../../Pages/AccountCreation/accData";
// import ShareCaptal from "../../Pages/ShareCaptal";
// // Ashif
// import GeneralRecepit from "../../Pages/FinancialAccounting/GeneralRecepit";
// import BankEntries from "../../Pages/FinancialAccounting/BankEntries";
// import ChequesOnHand from "../../Pages/FinancialAccounting/ChequesOnHand";
// import ChecksInBank from "../../Pages/FinancialAccounting/ChecksInBank";
// import ChequesIssued from "../../Pages/FinancialAccounting/ChequesIssued";
// // Bhavaya and chamu
// import AccountLedger from "../../Pages/AccountLedger";
// import BankBook from "../../Pages/BankBook";
// import BRS from "../../Pages/BRS";
// import BRS_Statement from "../../Pages/BRS_Statement";
// import CashTransactions from "../../Pages/CashTransactions";
// import ChequeCancel from "../../Pages/ChequeCancel";
// import ChequeReturns from "../../Pages/ChequeReturns";
// import DayBook from "../../Pages/DayBook";
// import IssuedCheques from "../../Pages/IssuedCheques";
// import LedgerSummary from "../../Pages/LedgerSummary";
// import AccountStatement from "../../Pages/AccountStatement";
// // Laskhmi
// import Passbookre from "../../Pages/AdminEdit/passbookre";
// import Bookregen from "../../Pages/AdminEdit/bookregeneration";
// import Memberedit from "../../Pages/AdminEdit/memberedit";
// import Changepassword from "../../Pages/AdminEdit/changepassword";
// import Receiptdelete from "../../Pages/AdminEdit/Receiptsdel";
// // teja
// import RDinst from "../../Pages/Deposite_Reports/RDinst";
// import FDdetails from "../../Pages/Deposite_Reports/FDdetails";
// import RDrenew from "../../Pages/Deposite_Reports/RDrenew";
// import RDadvance from "../../Pages/Deposite_Reports/RDadvance";
// import RDdue from "../../Pages/Deposite_Reports/RDdue";
// import FDmonthlyint from "../../Pages/Deposite_Reports/FDmonthlyint";
// import Savingacc from "../../Pages/Deposite_Reports/savingacc";
// import DepandWith from "../../Pages/Deposite_Reports/DepandWith";
// import FDCinterest from "../../Pages/Deposite_Reports/FDCinterest";
// import Sharewithdrawal from "../../Pages/Deposite_Reports/sharewithdrawal";
// import ReciptsDel from "../../Pages/Deposite_Reports/ReciptsDel";
// import DepositeInt from "../../Pages/Deposite_Reports/DepositeInt";
// // Prasad
// import Daily from "../../Pages/Reports/daily";
// import AppReports from "../../Pages/Reports/mobileapp";
// import MemberwiseReports from "../../Pages/MemberReports/memberwise";
// import MemberDetailsReports from "../../Pages/MemberReports/memberdetails";
// import MemberDetailsSearch from "../../Pages/MemberReports/membersearch";
// import GroupReports from "../../Pages/MemberReports/groupreports";
// import MemberAccountStatement from "../../Pages/MemberReports/memberstatement";
// import MonthlyMaturityReports from "../../Pages/MemberReports/monthlymaturity";
// import PassbookCancel from "../../Pages/MemberReports/passbookcancel";
// import EmiCalculator from "../../Pages/EmiCalculator/EmiCalculator/emicalc";
// // Divya & laskhmi
// import Cashdeposit from "../../Pages/Saving account/cashdeposit";
// import SavingWithdraw from "../../Pages/withdraw/index";
// import RecepitsDelete from "../../Pages/withdraw/recepitsdelete";

// // Raji & Prasad
// import Withdraw from "../../Pages/Recipts/withdraw";
// import LockUnlockApp from "../../Pages/Datalock/datalock";

const AppRouter = () => {
  return (
    <Routes>
      <Route  path="/LoginPage" element={ <LoginPage />} />
      <Route path="/Dashboard" element={<HomePage />} />
      {/* <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
      <Route path="/userright" element={<Userright />}></Route>
      <Route path="/passbookre" element={<Reports />}></Route>
      <Route path="/appreport" element={<AppReports />}></Route>
      <Route path="/savingwithdraw" element={<SavingWithdraw />}></Route>
      <Route path="/recepitsdelete" element={<RecepitsDelete />}></Route>

      <Route path="/trailbalance" element={<TrailBalance />}></Route>
      <Route path="/comparisionTB" element={<ComparisionTB />}></Route>
      <Route path="/sheduleTB" element={<SheduleTB />}></Route>
      <Route path="/balancesheet" element={<BalanceSheet />}></Route>
      <Route path="/profitloss" element={<ProfitLoss />}></Route>

      <Route path="/csr/trailbalance" element={<CSRTrailBalance />}></Route>
      <Route path="/csr/comparisionTB" element={<CSRComparisionTB />}></Route>
      <Route path="/csr/sheduleTB" element={<CSRSheduleTB />}></Route>
      <Route path="/csr/balancesheet" element={<CSRBalanceSheet />}></Route>
      <Route path="/csr/profitloss" element={<CSRProfitLoss />}></Route>
      <Route path="/memberdetails" element={<MemberDetails />}></Route>
      <Route path="/accData" element={<AccountCreation />}></Route>
      <Route path="/sharecaptal" element={<ShareCaptal />}></Route>
      <Route path="/GeneralRecepit" element={<GeneralRecepit />}></Route>
      <Route path="/BankEntries" element={<BankEntries />}></Route>
      <Route path="/ChequesOnHand" element={<ChequesOnHand />}></Route>
      <Route path="/ChecksInBank" element={<ChecksInBank />}></Route>
      <Route path="/ChequesIssued" element={<ChequesIssued />}></Route>
<Route path="/accledger" element={<AccountLedger />}></Route>
      <Route path="/bankbook" element={<BankBook />}></Route>
      <Route path="/brs" element={<BRS />}></Route>
      <Route path="/brsstatement" element={<BRS_Statement />}></Route>
      <Route path="/cashtrans" element={<CashTransactions />}></Route>
      <Route path="/chequecancel" element={<ChequeCancel />}></Route>
      <Route path="/chequereturn" element={<ChequeReturns />}></Route>
      <Route path="/daybook" element={<DayBook />}></Route>
      <Route path="/issuedcheque" element={<IssuedCheques />}></Route>
      <Route path="/ledgersummary" element={<LedgerSummary />}></Route>
      <Route path="/accstatement" element={<AccountStatement />}></Route>
      <Route path="/passbookre" element={<Passbookre />}></Route>
      <Route path="/bookregen" element={<Bookregen />}></Route>
      <Route path="/memberedit" element={<Memberedit />}></Route>
      <Route path="/changepassword" element={<Changepassword />}></Route>
      <Route path="/receiptdelete" element={<Receiptdelete />}></Route>
      <Route path="/datalock" element={<LockUnlockApp />}></Route>
      <Route path="/RDinst" element={<RDinst />}></Route>
      <Route path="/FDdetails" element={<FDdetails />}></Route>
      <Route path="/RDrenew" element={<RDrenew />}></Route>
      <Route path="/RDadvance" element={<RDadvance />}></Route>
      <Route path="/RDdue" element={<RDdue />}></Route>
      <Route path="/FDmonthlyint" element={<FDmonthlyint />}></Route>
      <Route path="/savingacc" element={<Savingacc />}></Route>
      <Route path="/DepandWith" element={<DepandWith />}></Route>
      <Route path="/FDCinterest" element={<FDCinterest />}></Route>
      <Route path="/Sharewithdrawal" element={<Sharewithdrawal />}></Route>
      <Route path="/ReciptsDel" element={<ReciptsDel />}></Route>
      <Route path="/DepositeInt" element={<DepositeInt />}></Route>
      <Route path="/Daily" element={<Daily />}></Route>
      <Route path="/AppReports" element={<AppReports />}></Route>
      <Route path="/MemberwiseReports" element={<MemberwiseReports />}></Route>
      <Route path="/MemberDetailsReports" element={<MemberDetailsReports />}></Route>
      <Route path="/MemberDetailsSearch" element={<MemberDetailsSearch />}></Route>
      <Route path="/GroupReports" element={<GroupReports />}></Route>
      <Route path="/MemberAccountStatement" element={<MemberAccountStatement />}></Route>
      <Route path="/MonthlyMaturityReports" element={<MonthlyMaturityReports />}></Route>
      <Route path="/passbookcancellation" element={<Withdraw />}></Route>
      <Route path="/Emicalc" element={<EmiCalculator/>}></Route>
      <Route path="/cashdeposit" element={<Cashdeposit />}></Route> */}
    </Routes>
  );
}
export default AppRouter;


// import React from 'react'

// const Router = () => {
//   return (
//     <div>
//       <h1>asasa</h1>
//     </div>
//   )
// }

// export default Router
