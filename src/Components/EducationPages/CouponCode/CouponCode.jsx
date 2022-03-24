/** @format */

import React, { useState } from "react";
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
import Expand from "react-expand-animated";

function CouponCode(props) {
  const [addMangeopen, setaddMangeopen] = useState(false);
  const [CouponCode, setCouponCode] = useState("");
  const [ExpiryDate, setExpiryDate] = useState("");
  const [Reedemuser, setReedemuser] = useState("");
  const [Point, setPoint] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  const [filterData, setfilterData] = useState([
    {
      CouponCode: "coupontest1",
      Reedemuser: "100",
      Point: "10",
      ExpiryDate: "2022-01-20",
    },
    {
      CouponCode: "coupontest2",
      Reedemuser: "100",
      Point: "10",
      ExpiryDate: "2022-01-20",
    },
  ]);

  // const filterData = [{
  //     CouponCode: "coupontest1",
  //     Reedemuser: "100",
  //     Point: "10",
  //     ExpiryDate: "2022-01-20"
  // },
  // {
  //     CouponCode: "coupontest2",
  //     Reedemuser: "100",
  //     Point: "10",
  //     ExpiryDate: "2022-01-20"
  // },
  // ];

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
          <div className="Content_topHeading">Manage Coupon Code</div>
          <hr />

          <div
            className="sub_content mt-3 mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => setaddMangeopen(!addMangeopen)}
          >
            <i class="fa fa-plus" aria-hidden="true"></i> Add New Coupon code
          </div>
          <Expand open={addMangeopen}>
            <Card className=" mb-2 Card_shadow p-3">
              <div className="card_admissiondetails_height">
                <div className="textfiled_margin">
                  <div className="card_content_instition">
                    <div className="text-right">
                      <span
                        className="icon_color"
                        onClick={() => setaddMangeopen(!addMangeopen)}
                      >
                        <i class="fa fa-times hover_cursor"></i>
                      </span>
                    </div>

                    <Grid className="Component_main_grid">
                      <Grid item md={6}>
                        <div className="text_filed_heading">Coupon Code</div>
                        <div className="mr-2 mt-1">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter Coupon code"
                            autoComplete="off"
                            value={CouponCode}
                            onChange={(e) => {
                              setCouponCode(e.target.value);
                            }}
                          />
                        </div>
                      </Grid>

                      <Grid item md={6}>
                        <div className="text_filed_heading">Point</div>
                        <div className="mr-2 mt-1">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter Point"
                            autoComplete="off"
                            value={Point}
                            onChange={(e) => {
                              setPoint(e.target.value);
                            }}
                          />
                        </div>
                      </Grid>
                    </Grid>

                    <Grid className="Component_main_grid">
                      <Grid item md={6}>
                        <div className="text_filed_heading">Expiry Date</div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="date"
                            className="form-control "
                            autoComplete="off"
                            value={ExpiryDate}
                            onChange={(e) => {
                              setExpiryDate(e.target.value);
                            }}
                          />
                        </div>
                      </Grid>

                      <Grid item md={6}>
                        <div className="text_filed_heading">
                          No. of User Redeem
                        </div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="text"
                            className="form-control "
                            autoComplete="off"
                            value={Reedemuser}
                            onChange={(e) => {
                              setReedemuser(e.target.value);
                            }}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="mt-2 pb-2 ">
                    <Button variant="contained" className="button_formatting">
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Expand>

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
                        Coupon Code
                      </StyledTableCell>
                      <StyledTableCell align="left" className="table_header">
                        Point
                      </StyledTableCell>

                      <StyledTableCell align="left" className="table_header">
                        No. of User Redeem
                      </StyledTableCell>
                      <StyledTableCell align="left" className="table_header">
                        Expiry Date
                      </StyledTableCell>

                      <StyledTableCell align="left" className="table_header">
                        Action
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? filterData.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : filterData
                    ).map((row) => (
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          <span>{row.CouponCode}</span>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.Point}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.Reedemuser}
                        </StyledTableCell>

                        <StyledTableCell align="left">
                          {row.ExpiryDate}
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

export default HOC(CouponCode);
