/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../../Common/HOC";

//material ui data table
import { Card, Grid, Button } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loder from "../../Loder/loder";
import { getBaseUrl } from "../../utils";
import { blankValidator } from "../../utils/Validation";
import { showNotificationMsz } from "../../utils/Validation";

function UserList(props) {
  const navigate = useNavigate();
  const classes = useStyles();
  const [getAlluserArry, setgetAlluserArry] = useState([]);
  const [isUpdated, setisUpdated] = useState(false);

  const filterData = [
    {
      image: "https://statinfer.com/wp-content/uploads/dummy-user.png",
      name: "jatin",
      email: "user@gmail.com",
    },
    {
      image: "https://statinfer.com/wp-content/uploads/dummy-user.png",
      name: "Arun",
      email: "user@gmail.com",
    },
  ];

  useEffect(() => {
    try {
      let url = getBaseUrl() + "admin/gelAllUser";

      axios.get(url).then(
        (res) => {
          setgetAlluserArry(res.data.getAllUser);
          console.log("data category data:::", res);
          // showNotificationMsz(res.data.msg, "success");
        },
        (error) => {
          //   showNotificationMsz(error, "danger");
        }
      );
    } catch (error) {
      //   showNotificationMsz(error, "danger");
    }
  }, [isUpdated]);
  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div className="Page_width content_padding">
        <div className="ml-3 mr-3">
          <div className="Content_topHeading">Manage User</div>
          <hr />

          <div className="text-center sub_content mt-3 mb-2">Users List</div>

          {/* <div className="text-right"><Button className="add_button" onClick={() => navigate("/add-group")}>Add Group</Button></div> */}

          <div className="mb-3">
            <Card className="p-2 Card_shadow mt-2 card_height">
              <Grid className="Component_main_grid">
                <Grid item md={3} className="p-2">
                  <input
                    type="text"
                    placeholder="Search by Name"
                    className="form-control"
                  />
                </Grid>
                <Grid item md={9} className="p-3"></Grid>
              </Grid>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left" className="table_header">
                        Name
                      </StyledTableCell>
                      <StyledTableCell align="left" className="table_header">
                        Email
                      </StyledTableCell>

                      <StyledTableCell align="left" className="table_header">
                        Status
                      </StyledTableCell>

                      <StyledTableCell align="left" className="table_header">
                        Action
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {getAlluserArry.map((row) => (
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.email}
                        </StyledTableCell>

                        <StyledTableCell align="left">
                          <button type="button" class="btn btn-info">
                            Active
                          </button>
                        </StyledTableCell>

                        <StyledTableCell align="left">
                          <div
                            className="d-flex"
                            style={{ justifyContent: "space-around" }}
                          >
                            <button type="button" class="btn btn-info">
                              Edit
                            </button>
                            <button type="button" class="btn btn-danger">
                              Delete
                            </button>
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
                <TablePagination
                  true
                  rowsPerPageOptions={false}
                  component="div"
                  count={filterData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableContainer>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default HOC(UserList);
