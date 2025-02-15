import React from "react";
import "./SideMenuBar.css";
import navList from "../../data/navItem";
import { useNavigate } from "react-router-dom";

const SideMenuBar = () => {
  const navigate = useNavigate();
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#admin-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Admin</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="admin-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#customers-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Applications</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="customers-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a onClick={() => navigate("/Admin/Application/UserRight")}>
                    <i className="bi bi-circle"></i>
                    <span>User Right</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => navigate("/Admin/Application/DateLock")}>
                    <i className="bi bi-circle"></i>
                    <span>Data Lock</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Producer Company */}
        <li className="nav-item">
          <a
            // onClick={() => navigate("/producercompany")}
            className="nav-link collapsed"
            data-bs-target="#producercompany-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Producer Company</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="producercompany-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li className="nav-item">
              <a
               // onClick={() => navigate("/producercompany/application")}
                className="nav-link collapsed"
                data-bs-target="#applications-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Applications</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="applications-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate("/ProducerCompany/Applications/MemberDetails")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Member Details</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate("/ProducerCompany/Applications/ShareCapital")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Share Capital</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate("/ProducerCompany/Applications/AccountCreation")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Account Creation</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#receipts-nav"
                data-bs-toggle="collapse"
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Receipts/Withdrawal</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="receipts-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate("/ProducerCompany/Receipts/Withdrawl/Receipts")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Receipts</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/ProducerCompany/Receipts/Withdrawl/PassbookCancellation"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Passbook Cancellation</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#adminleveledit-nav"
                data-bs-toggle="collapse"
                //onClick={() => navigate("/producercompany/adminleveledit")}
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Admin Level Edit</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="adminleveledit-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate(
                        "/ProducerCompany/AdminLevelEdit/PassbookRegeneration"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Passbook Regenaration</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate("/ProducerCompany/AdminLevelEdit/MemberEdit")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Member Edit</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate("/ProducerCompany/AdminLevelEdit/ChangePassword")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Change Password</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate("/ProducerCompany/AdminLevelEdit/ReceiptDelete")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Recepit Delete</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#collectionreports-nav"
                data-bs-toggle="collapse"
               // onClick={() => navigate("/producercompany/Collectionreports")}
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Collection Reports</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="collectionreports-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate(
                        "/ProducerCompany/CollectionReports/PaymentAndReceiptDetails"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Payment and Recepit Details</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#savingaccount-nav"
                data-bs-toggle="collapse"
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Savings Account</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="savingaccount-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate("/ProducerCompany/SavingsAccount/CashDeposit")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Cash Deposit</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate("/ProducerCompany/SavingsAccount/Withdraw")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Cash Withdraw</span>
                  </a>
                </li>
              </ul>
            </li>

            {/* <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#reports-nav"
                data-bs-toggle="collapse"
                href="#"
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Reports </span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="reports-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a 
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    href="#">
                    <i className="bi bi-circle"></i>
                    <span>Passbook</span>
                  </a>
                </li>
                
              
              </ul>
            </li> */}

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#groupentry-nav"
                data-bs-toggle="collapse"
              //  onClick={() => navigate("/producercompany/groupentry")}
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Group Entry </span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="groupentry-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate("/ProducerCompany/GroupEntry/GroupEntry")
                    }>
                    <i className="bi bi-circle"></i>
                    <span>Group Entry</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#groupentry-nav"
                data-bs-toggle="collapse"
                // onClick={() => navigate("/producercompany/groupentry")}
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Reports </span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="groupentry-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate("/ProducerCompany/Reports/Passbook")
                    }>
                    <i className="bi bi-circle"></i>
                    <span>Passbook</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Producer company reports */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#companyreports-nav"
            data-bs-toggle="collapse"
            // onClick={() => navigate("/producercompanyreports")}
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Producer Company Reports</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="companyreports-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#memberreports-nav"
                data-bs-toggle="collapse"
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Member Reports</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="memberreports-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate(
                        "/ProducerCompanyReports/MemberReports/MemberWiseDetailsReports"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Member Wise Details Reports</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/ProducerCompanyReports/MemberReports/MemberDetailsReports"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Member Details Reports</span>
                  </a>
                </li>

                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/ProducerCompanyReports/MemberReports/MemberDetailsSearch"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Member Details Search</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/ProducerCompanyReports/MemberReports/GroupDetailsReports"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Group Details Reports</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/ProducerCompanyReports/MemberReports/MemberAccountStatement"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Member Account Statement</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/producercompanyreports/memberreports/passbookcancellation"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Passbook Cancellation</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#depositreports-nav"
                data-bs-toggle="collapse"
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Deposit Reports</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="depositreports-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate(
                        "/ProducerCompanyReports/DepositReports/SavingAccountStatement"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Saving Account Statement</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/ProducerCompanyReports/DepositReports/Deposit&WithdrawalDetails"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Deposit & Withdrawal Details</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/ProducerCompanyReports/DepositReports/SavingsOrShareWithdrawalDetails"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Savings Withdrawal Details</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/ProducerCompanyReports/DepositReports/ReceiptsDeleteReports"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Recepits Delete Report</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#collectionreport-nav"
                data-bs-toggle="collapse"
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Collection Report</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="collectionreport-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate(
                        "/ProducerCompanyReports/DepositReports/DayClosingReport"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Day Closing Report</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* financial accounting */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#finanicalaccounting-nav"
            data-bs-toggle="collapse"
            // onClick={() => navigate("financialaccounting")}
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Financial Accounting</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="finanicalaccounting-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#financialmasters-nav"
                data-bs-toggle="collapse"
                // onClick={() =>
                //   navigate("/FinancialAccounting/FinancialMasters")
                // }
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Financial Masters</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="financialmasters-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate(
                        "/FinancialAccounting/FinancialMasters/BankInformation"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Bank Information</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/FinancialAccounting/FinancialMasters/CheckManagement"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Check Management</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/FinancialAccounting/FinancialMasters/EmployeeInfo"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Employee Information</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#financialtransactions-nav"
                data-bs-toggle="collapse"
                // onClick={() =>
                //   navigate("FinancialAccounting/FinancialTranscations")
                // }
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Financial Transactions</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="financialtransactions-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate(
                        "/FinancialAccounting/FinancialTransactions/GeneralRecepit"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>General Recepit</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/FinancialAccounting/FinancialTransactions/BankEntries"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Bank Entries</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/FinancialAccounting/FinancialTransactions/ChequesOnHand"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Cheques On Hand</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/FinancialAccounting/FinancialTransactions/ChecksInBank"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Checks In Bank</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/FinancialAccounting/FinancialTransactions/ChequesIssued"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Cheques Issued</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#customers-nav"
                data-bs-toggle="collapse"
                // onClick={() =>
                //   navigate("/FinancialAccounting/FinancialReports")
                // }
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>financial Reports</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="financial reports-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    href="#"
                  >
                    <i className="bi bi-circle"></i>
                    <span>Account Ledger</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span>Bank Book</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span>Brs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span>BRS Statements</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span>Cash Transactions</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span>Check Cancel</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span>Check Enqiry</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span>Check Returns</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span>Day Book</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span>Issued Cheques</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span>Ledger Summary</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                    <span>Account Statement</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Analytical Reports */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#analyticalreports-nav"
            data-bs-toggle="collapse"
            onClick={() => navigate("/analyticalreports")}
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Analytical Reports</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="analyticalreports-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#msireports-nav"
                data-bs-toggle="collapse"
                onClick={() => navigate("/AnalyticalReports/MsiReports")}
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>MSI Reports</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="msireports-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate("/AnalyticalReports/MsiReports/TrailBalance")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Trail Balance</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate("/AnalyticalReports/MsiReports/ComparisonTb")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Comparison TB</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate("/AnalyticalReports/MsiReports/ScheduleTb")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Schedule TB</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate("/AnalyticalReports/MsiReports/BalanceSheet")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Balance Sheet</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate("/AnalyticalReports/MsiReports/ProfitAndLoss")
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Profit & loss</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-target="#consolidatedreports-nav"
                data-bs-toggle="collapse"
                onClick={() =>
                  navigate("/AnalyticalReports/ConsolidatedReports")
                }
              >
                <i className="bi bi-menu-button-wide"></i>
                <span>Consolidated Reports</span>
                <i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul
                id="consolidatedreports-nav"
                className="nav-subcontent collapse"
                data-bs-parent="#admin-nav"
              >
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate(
                        "/AnalyticalReports/ConsolidatedReports/TrailBalance"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Trail Balance</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate(
                        "/AnalyticalReports/ConsolidatedReports/ComparisonTb"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Comparison TB</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate(
                        "/AnalyticalReports/ConsolidatedReports/ScheduleTb"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Schedule TB</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link collapsed"
                    data-bs-target="#customers-nav"
                    data-bs-toggle="collapse"
                    onClick={() =>
                      navigate(
                        "/AnalyticalReports/ConsolidatedReports/BalanceSheet"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Balance Sheet</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      navigate(
                        "/AnalyticalReports/ConsolidatedReports/ProfitAndLoss"
                      )
                    }
                  >
                    <i className="bi bi-circle"></i>
                    <span>Profit & loss</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Add other menu items as needed */}

        {/* <li className="nav-heading">Pages</li>
        {navList.map(nav => (
          <li className="nav-item" key={nav._id}>
            <a className="nav-link collapsed" href="#">
              <i className={nav.icon}></i>
              <span>{nav.name}</span>
            </a>
          </li>
        ))} */}
      </ul>
    </aside>
  );
};

export default SideMenuBar;
