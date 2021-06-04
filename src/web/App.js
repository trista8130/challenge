import React, { useEffect, useState } from "react";
import AgeTable from "./components/AgeTable";
import UsersTable from "./components/UsersTable";
import Service from "./services/api";

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    const getAllUsers = async () => {
      const response = await Service.fetchAllUser();
      setUsers(response);
    };
    getAllUsers();
  }, []);
  console.log(users);
  return (
    <div className="app">
      <UsersTable users={users}></UsersTable>
      <AgeTable></AgeTable>
    </div>
  );
}
export default App;
