import React from 'react';
// import Cards from '../../components/Cards';
import RecentActivityItem from '../../components/RecentActivity/RecentActivityItem';
// import Reports from '../../components/Reports';
import BudgetReport from '../../components/BudgetReport/BudgetReport';
// import WebTraffic from '../../components/WebTraffic';
import News from '../../components/News/News';
import './DashBoard.css'
// import TopSelling from '../../components/TopSelling';
// import RecentSales from '../../components/RecentSales';
import Cards from '../../components/Cards/Cards';
import Reports from '../../components/Reports/Reports';
import WebTraffic from '../../components/WebTraffic/WebTraffic';
import TopSelling from '../../components/TopSelling/TopSelling';
import RecentSales from '../../components/RecentSales/RecentSales';


const DashBoard = () => {
  return (
    <section className="section dashboard">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <Cards />
            <div className="col-12">
              <Reports />
            </div>
            <div className="col-12">
            {/* <RecentSales /> */}
            </div>
            <div className="col-12">
              <TopSelling />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <RecentActivityItem />
          <BudgetReport />
          <WebTraffic />
          <News />
        </div>
      </div>
    </section>
  );
}

export default DashBoard;
