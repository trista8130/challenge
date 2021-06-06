import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Service from "../services/api";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  userTable: { marginBottom: "40px" },
  userList: {
    minWidth: 650,
  },
  head: {
    fontWeight: 600,
  },
  spinners: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function UsersTable() {
  const classes = useStyles();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAllUsers = async () => {
      const response = await Service.fetchAllUser();
      setUsers(response);
      setLoading(false);
    };
    getAllUsers();
  }, []);

  return (
    <div className={classes.userTable}>
      <h1>All Users</h1>
      <p>Users and their age</p>
      {loading ? (
        <LinearProgress className={classes.spinners} />
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.userList} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.head}>User Name</TableCell>
                <TableCell className={classes.head}>Age</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map((user, i) => (
                  <TableRow key={`user_${i}`} hover>
                    <TableCell component="th" scope="row">
                      {user.username}
                    </TableCell>
                    <TableCell>{user.age}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
