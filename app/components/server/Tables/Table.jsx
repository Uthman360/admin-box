import TableClient from "../../client/TableClient";
import "./table.css";

const Table = ({ Interest }) => {
  const staticData = [
    { name: "John Doe", email: "johndoe@example.com", phone: "+11234567890", country: "USA", age: 34, gender: "Male", interests: ["Power", "Agility"] },
    { name: "Jane Smith", email: "janesmith@example.com", phone: "+19876543210", country: "Canada", age: 28, gender: "Female", interests: ["Balance"] },
    { name: "Alice Johnson", email: "alicejohnson@example.com", phone: "+15555555555", country: "UK", age: 45, gender: "Other", interests: ["Strength", "Endurance"] },
    { name: "Bob Brown", email: "bobbrown@example.com", phone: "+16666666666", country: "Australia", age: 22, gender: "Male", interests: ["Power", "Agility", "Balance"] },
    { name: "Charlie Davis", email: "charliedavis@example.com", phone: "+17777777777", country: "Germany", age: 30, gender: "Female", interests: ["Power"] },
  ];

  return <TableClient staticData={staticData} Interest={Interest} />;
};

export default Table;
