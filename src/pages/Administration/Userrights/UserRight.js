import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import {
  getCustomers,
  getInventory,
  getOrders,
  getRevenue,
} from "../../../API";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import { Bar } from "react-chartjs-2";
import Customers from "../../Userright/userData";
import ModuleData from "../../Userright/moduleData";
import FunctionData from "../../Userright/functionData";
import Downdata from "../../Userright/downdata";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UserRight = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="accountContainer">
      {/* <Typography.Title level={4} className="headtitle">User Rights</Typography.Title> */}
      <h2 style={{ color: "#E47B25" }}>User Rights</h2>
      <Space direction="horizontal">
        {/* User Card Start */}
        <DashboardCard
          style={{
            color: "#268DCB",
            backgroundColor: selectedCard === "cardA" ? "#F2FAFF" : "",
            width: "75%",
            fontSize: 30,
            padding: 30,
            fontWeight: "bold",
          }}
          icon={
            <UserOutlined
              style={{
                color: "#268DCB",
                backgroundColor: selectedCard === "cardA" ? "#F2FAFF" : "",
                borderRadius: 20,
                fontSize: 30,
                padding: 8,
                fontWeight: "bold",
              }}
            />
          }
          title="Users"
          value={25}
          onClick={() => handleCardClick("cardA")}
        />

        <DashboardCard
          style={{
            color: "#268DCB",
            backgroundColor: selectedCard === "cardB" ? "#F2FAFF" : "",
            width: "70%",
            fontSize: 30,
            padding: 8,
            fontWeight: "bold",
          }}
          icon={
            <ShoppingOutlined
              style={{
                color: "#268DCB",
                backgroundColor: selectedCard === "cardB" ? "#F2FAFF" : "",
                borderRadius: 20,
                fontSize: 30,
                padding: 8,
                fontWeight: "bold",
              }}
            />
          }
          title="Modules"
          value={5}
          onClick={() => handleCardClick("cardB")}
        />

        <DashboardCard
          style={{
            color: "#268DCB",
            backgroundColor: selectedCard === "cardC" ? " #F2FAFF" : "",
            width: "70%",
            fontSize: 30,
            padding: 8,
          }}
          icon={
            <UserOutlined
              style={{
                color: "#268DCB",
                backgroundColor: selectedCard === "cardC" ? " #F2FAFF" : "",
                borderRadius: 20,
                fontSize: 30,
                padding: 8,
              }}
            />
          }
          title={"Functions"}
          value={25}
          onClick={() => handleCardClick("cardC")}
        />
      </Space>
      <Space>
        {selectedCard === "cardA" && <Customers />}
        {selectedCard === "cardB" && <ModuleData />}
        {selectedCard === "cardC" && <FunctionData />}
        {!selectedCard && <Downdata />}
      </Space>
    </div>
  );
};

function DashboardCard({ title, value, icon, onClick }) {
  return (
    <Card onClick={onClick}>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
export default UserRight;
