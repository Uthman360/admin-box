import CoachesClient from "../components/client/CoachesClient";
import Pagination from "../components/server/Pagination/Pagination";
import Table from "../components/Tables/Table";
import Sidebar from "../helpers/Sidebar";
import "./coaches.css";

const Coaches = () => {
  return (
    <div className="row">
      <Sidebar />
      <div className="right_dash col">
        <CoachesClient />
        <Table />
        <Pagination />
      </div>
    </div>
  );
};

export default Coaches;
