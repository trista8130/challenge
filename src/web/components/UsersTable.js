import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  userTable: { marginBottom: "40px" },
  userList: {
    minWidth: 650,
  },
  head: {
    fontWeight: 600,
  },

});

export default function UsersTable({ users }) {
  const classes = useStyles();
  return (
    <div className={classes.userTable}>
      <h1>All Users</h1>
      <p>Users and their age</p>
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
    </div>
  );
}
