import React, { useEffect, useState } from "react";
import Service from "../services/api";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ageTable: { marginBottom: "200px" },
  ageList: {
    minWidth: 650,
  },
  head: {
    fontWeight: 600,
  },
  dropContainer: {
    position: "relative",
    zIndex: 100,
  },
  dropdown: {
    width: "150px",
    cursor: "pointer",
    boxShadow:
      "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
    position: "relative",
    top: "-350px",
    transitionDuration: ".6s",
    zIndex: 1,
    backgroundColor: "#eeee",
  },
  disactive: { display: "none" },
  active: {
    position: "absolute",
    top: "36px",
    zIndex: 1,
  },
  item: {
    padding: "5px 10px",
  },
  spinners: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const AgeTable = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState("__");
  const [itemsList, setItemsList] = useState([]);
  const [ageOfList, setAgeOfList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getItemsList = async () => {
      const response = await Service.fetchAllItems(item);
      setItemsList(response);
    };
    getItemsList();
  }, []);
  useEffect(() => {
    const getAges = async () => {
      const response = await Service.fetchListOfAges(item);
     // console.log("ages", response);
      setAgeOfList(response);
      setLoading(false);
    };
    getAges();
  }, [item]);
  const handleDropDown = () => {
    setOpen(!open);
  };
  const handleSelectItem = (e) => {
    console.log(e.target.innerText);
    setLoading(true);
    setItem(e.target.innerText);
    setOpen(false);
  };

  return (
    <div className={classes.ageTable}>
      <h1>Age Demongraphic of Users With {item}</h1>

      <div className={classes.dropContainer}>
        <div>
          <Button variant="contained" onClick={handleDropDown}>
            Item <ArrowDropDownIcon />
          </Button>
        </div>

        <Table
          className={`${classes.dropdown} ${
            open ? classes.active : classes.disactive
          }`}
        >
          <TableBody onClick={handleSelectItem}>
            {itemsList.map((item, i) => (
              <TableRow key={`list_${i}`} hover>
                <TableCell className={classes.item}>{item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {loading ? (
        <LinearProgress className={classes.spinners} />
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.ageList} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.head}>Age</TableCell>
                <TableCell className={classes.head}>Count</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {ageOfList &&
                ageOfList.map((item, i) => (
                  <TableRow key={`ageItem_${i}`} hover>
                    <TableCell component="th" scope="row">
                      {item.age}
                    </TableCell>
                    <TableCell>{item.count}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default AgeTable;
