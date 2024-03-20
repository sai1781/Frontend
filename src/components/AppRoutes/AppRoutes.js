import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../../pages/DashBoard/DashBoard";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import UserRight from "../../pages/Administration/Userrights/UserRight";
import DataAndLock from "../../pages/Administration/DataLockAndUnlock/DataAndLock";
import MemberDetails from "../../pages/ProducerCompany/Applications/MemberDetails/MemberDetails";
import ShareCapital from "../../pages/ProducerCompany/Applications/ShareCapital/ShareCapital";
import AccountCreation from "../../pages/ProducerCompany/Applications/AccountCreation/AccountCreation";
import Receipts from "../../pages/ProducerCompany/ReceiptsWithdrawal/Receipts/Receipts";
import PassbookCancellation from "../../pages/ProducerCompany/ReceiptsWithdrawal/PassbookCancellation/PassbookCancellation";
import PassBookGeneration from "../../pages/ProducerCompany/AdminLevelEdit/PassbookReGeneration/PassBookReGeneration";
import MemberEdit from "../../pages/ProducerCompany/AdminLevelEdit/MemberEdit/MemberEdit";
import Changepassword from "../../pages/ProducerCompany/AdminLevelEdit/ChangePassword/ChangePassword";
import ReceiptDelete from "../../pages/ProducerCompany/AdminLevelEdit/ReceiptsDelete/ReceiptsDelete";
import PaymentDetails from "../../pages/ProducerCompany/DailyAndMonthlyCollection/Payment&Receipt/PaymentDetails";
import CashDeposit from "../../pages/ProducerCompany/SavingAccount/CashDeposit/CashDeposit";
import Withdraw from "../../pages/ProducerCompany/SavingAccount/Withdraw/Withdraw";
import GroupEntry from "../../pages/ProducerCompany/GroupEntry/GroupEntry";
import MemberWiseDetailsReports from "../../pages/ProducerCompanyReports/MemberReports/MemberWiseDetailsReports/MemberWiseDetailsReports";
import MemberDetailsReports from "../../pages/ProducerCompanyReports/MemberReports/MemberDetailsReport/MemberDetailsReport";
import MemberDetailsSearch from "../../pages/ProducerCompanyReports/MemberReports/MemberDetailsSearch/MemberDetailsSearch";
import GroupDetailsReports from "../../pages/ProducerCompanyReports/MemberReports/GroupDetailsReports/GroupDetailsReports";
import MemberAccountStatement from "../../pages/ProducerCompanyReports/MemberReports/MemberAccountStatement/MemberAccountStatement";
import SavingAccountStatement from "../../pages/ProducerCompanyReports/DepositReports/SavingAccountStatement/SavingAccountStatement";
import DepositAndWithdrawalDetails from "../../pages/ProducerCompanyReports/DepositReports/DepositsAndithdrawalDetails/DepositsAndithdrawalDetails";
import SavingsOrShareWithdrawalDetails from "../../pages/ProducerCompanyReports/DepositReports/SavingsorShareWithdrawalDetails/SavingsOrShareWithdrawalDetails";
import ReceiptsDeleteReports from "../../pages/ProducerCompanyReports/DepositReports/ReceiptsDeleteReports/ReceiptsDeleteReports";
import DayClosingReport from "../../pages/ProducerCompanyReports/DailyCollectionReports/DayClosingReports/DayClosingReports";
import BankInfo from "../../pages/FinancialAccounting/FinancialMasters/BankInformation/BankInformation";
import CheckManagement from "../../pages/FinancialAccounting/FinancialMasters/Checkmanagement/CheckManagement";
import EmployeeInfo from "../../pages/FinancialAccounting/FinancialMasters/EmployeeInformation/EmployeeInfo";
import GeneralRecepit from "../../pages/FinancialAccounting/FinancialTransaction/GeneralRecepit/GeneralRecepit";
import BankEntries from "../../pages/FinancialAccounting/FinancialTransaction/BankEntries/BankEntries";
import ChequesOnHand from "../../pages/FinancialAccounting/FinancialTransaction/ChequesOnHand/ChequesOnHand";
import ChecksInBank from "../../pages/FinancialAccounting/FinancialTransaction/ChecksInBank/ChecksInBank";
import ChequesIssued from "../../pages/FinancialAccounting/FinancialTransaction/ChequesIssued/ChequesIssued";
import MisBalanceSheet from "../../pages/AnalyaticReports/Mis Reports/BalanceSheet/MisBalanceSheet";
import MisComparisonTb from "../../pages/AnalyaticReports/Mis Reports/Comparision TB/MisComparisonTb";
import MisProfitLoss from "../../pages/AnalyaticReports/Mis Reports/MisProfitAndLoss/MisProfitLoss";
import MisScheduleTb from "../../pages/AnalyaticReports/Mis Reports/ScheduleTB/MisScheduleTb";
import MisTrailBalance from "../../pages/AnalyaticReports/Mis Reports/TrailBalance/MisTrailBalance";
import ConsolidatedBalanceSheet from "../../pages/AnalyaticReports/ConsolidatedReports/ConsolidatedBalanceSheet/ConsolidatedBalanceSheet";
import ConsolidatedTrailBalance from "../../pages/AnalyaticReports/ConsolidatedReports/ConsolidatedTrailBalance/ConsolidatedTrailBalance";
import ConsolidatedScheduleTb from "../../pages/AnalyaticReports/ConsolidatedReports/ConsolidatedScheduleTb/ConsolidatedScheduleTb";
import ConsolidatedComparisonTb from "../../pages/AnalyaticReports/ConsolidatedReports/ConsolidatedComparisonTb/ConsolidatedComparisonTb";
import ConsolidatedPL from "../../pages/AnalyaticReports/ConsolidatedReports/ConsolidatedPL/ConsolidatedPL";
import Passbook from "../Passbook/Passbook";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/Dashboard" element={<HomePage />} />
      <Route path="/Admin/Application/UserRight" element={<UserRight />} />
      <Route path="/Admin/Application/DateLock" element={<DataAndLock />} />
      <Route
        path="/ProducerCompany/Applications/MemberDetails"
        element={<MemberDetails />}
      />
      <Route
        path="/ProducerCompany/Applications/ShareCapital"
        element={<ShareCapital />}
      />

<Route
        path="/ProducerCompany/Reports/Passbook"
        element={<Passbook /> }
      />

      <Route
        path="/ProducerCompany/Applications/AccountCreation"
        element={<AccountCreation />}
      />
      <Route
        path="/ProducerCompany/Receipts/Withdrawl/Receipts"
        element={<Receipts />}
      />
      <Route
        path="/ProducerCompany/Receipts/Withdrawl/PassbookCancellation"
        element={<PassbookCancellation />}
      />
      <Route
        path="/ProducerCompany/AdminLevelEdit/PassbookRegeneration"
        element={<PassBookGeneration />}
      />
      <Route
        path="/ProducerCompany/AdminLevelEdit/MemberEdit"
        element={<MemberEdit />}
      />
      <Route
        path="/ProducerCompany/AdminLevelEdit/ChangePassword"
        element={<Changepassword />}
      />
      <Route
        path="/ProducerCompany/AdminLevelEdit/ReceiptDelete"
        element={<ReceiptDelete />}
      />
      <Route
        path="/ProducerCompany/CollectionReports/PaymentAndReceiptDetails"
        element={<PaymentDetails />}
      />
      <Route
        path="/ProducerCompany/SavingsAccount/CashDeposit"
        element={<CashDeposit />}
      />
      <Route
        path="/ProducerCompany/SavingsAccount/Withdraw"
        element={<Withdraw />}
      />
      <Route
        path="/ProducerCompany/GroupEntry/GroupEntry"
        element={<GroupEntry />}
      />
      <Route
        path="/ProducerCompanyReports/MemberReports/MemberWiseDetailsReports"
        element={<MemberWiseDetailsReports />}
      />
      <Route
        path="/ProducerCompanyReports/MemberReports/MemberDetailsReports"
        element={<MemberDetailsReports />}
      />
      <Route
        path="/ProducerCompanyReports/MemberReports/MemberDetailsSearch"
        element={<MemberDetailsSearch />}
      />
      <Route
        path="/ProducerCompanyReports/MemberReports/GroupDetailsReports"
        element={<GroupDetailsReports />}
      />
      <Route
        path="/ProducerCompanyReports/MemberReports/MemberAccountStatement"
        element={<MemberAccountStatement />}
      />
      <Route
        path="/ProducerCompanyReports/DepositReports/SavingAccountStatement"
        element={<SavingAccountStatement />}
      />
      <Route
        path="/ProducerCompanyReports/DepositReports/Deposit&WithdrawalDetails"
        element={<DepositAndWithdrawalDetails />}
      />
      <Route
        path="/ProducerCompanyReports/DepositReports/SavingsOrShareWithdrawalDetails"
        element={<SavingsOrShareWithdrawalDetails />}
      />
      <Route
        path="/ProducerCompanyReports/DepositReports/ReceiptsDeleteReports"
        element={<ReceiptsDeleteReports />}
      />
      <Route
        path="/ProducerCompanyReports/DepositReports/DayClosingReport"
        element={<DayClosingReport />}
      />
      <Route
        path="/FinancialAccounting/FinancialMasters/BankInformation"
        element={<BankInfo />}
      />
      <Route
        path="/FinancialAccounting/FinancialMasters/BankInformation"
        element={<BankInfo />}
      />
      <Route
        path="/FinancialAccounting/FinancialMasters/CheckManagement"
        element={<CheckManagement />}
      />
      <Route
        path="/FinancialAccounting/FinancialMasters/EmployeeInfo"
        element={<EmployeeInfo />}
      />
      <Route
        path="/FinancialAccounting/FinancialTransactions/GeneralRecepit"
        element={<GeneralRecepit />}
      />
      <Route
        path="/FinancialAccounting/FinancialTransactions/BankEntries"
        element={<BankEntries />}
      />
      <Route
        path="/FinancialAccounting/FinancialTransactions/ChequesOnHand"
        element={<ChequesOnHand />}
      />
      <Route
        path="/FinancialAccounting/FinancialTransactions/ChecksInBank"
        element={<ChecksInBank />}
      />
      <Route
        path="/FinancialAccounting/FinancialTransactions/ChequesIssued"
        element={<ChequesIssued />}
      />
      <Route
        path="/AnalyticalReports/MsiReports/TrailBalance"
        element={<MisTrailBalance />}
      />
      <Route
        path="/AnalyticalReports/MsiReports/ComparisonTb"
        element={<MisComparisonTb />}
      />
      <Route
        path="/AnalyticalReports/MsiReports/ProfitAndLoss"
        element={<MisProfitLoss />}
      />
      <Route
        path="/AnalyticalReports/MsiReports/BalanceSheet"
        element={<MisBalanceSheet />}
      />
      <Route
        path="/AnalyticalReports/MsiReports/ScheduleTb"
        element={<MisScheduleTb />}
      />
      <Route
        path="/AnalyticalReports/ConsolidatedReports/BalanceSheet"
        element={<ConsolidatedBalanceSheet />}
      />
      <Route
        path="/AnalyticalReports/ConsolidatedReports/ComparisonTb"
        element={<ConsolidatedComparisonTb />}
      />
      <Route
        path="/AnalyticalReports/ConsolidatedReports/ScheduleTb"
        element={<ConsolidatedScheduleTb />}
      />
      <Route
        path="/AnalyticalReports/ConsolidatedReports/TrailBalance"
        element={<ConsolidatedTrailBalance />}
      />
      <Route
        path="/AnalyticalReports/ConsolidatedReports/ProfitAndLoss"
        element={<ConsolidatedPL />}
      />
    </Routes>
  );
};
export default AppRouter;
