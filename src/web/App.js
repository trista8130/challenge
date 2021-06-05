import React, { useEffect, useState } from "react";
import AgeTable from "./components/AgeTable";
import UsersTable from "./components/UsersTable";
import Service from "./services/api";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  app: {
    padding: "20px",
    boxSizing:"border-box",
    zIndex:100,
    backgroundColor:"white"
  },
});

function App() {
  const classes = useStyles();
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
    <div className={classes.app}>
      <UsersTable users={users}></UsersTable>
      <AgeTable></AgeTable>
    </div>
  );
}
export default App;
