import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../ui/DashboardFilter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter/>
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
