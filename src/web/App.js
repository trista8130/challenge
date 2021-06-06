import React from "react";
import AgeTable from "./components/AgeTable";
import UsersTable from "./components/UsersTable";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  app: {
    padding: "20px",
    boxSizing: "border-box",
    zIndex: 100,
    backgroundColor: "white",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <UsersTable></UsersTable>
      <AgeTable></AgeTable>
    </div>
  );
}
export default App;
