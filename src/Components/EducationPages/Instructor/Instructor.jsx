/** @format */

import React, { useState, useEffect } from "react";
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
import Expand from "react-expand-animated";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loder from "../../Loder/loder";
import { getBaseUrl } from "../../utils";
import { blankValidator } from "../../utils/Validation";
import { showNotificationMsz } from "../../utils/Validation";
//dialog box
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

function GroupList(props) {
  const [instructor, setinstructor] = useState(false);
  const [addMangeopen, setaddMangeopen] = useState(false);
  const [instrutorArry, setinstrutorArry] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [coursename, setcoursename] = useState("");
  const [isupdated, setisupdated] = useState(false);
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
  const [EditDailogOpen, setEditDailogOpen] = useState(false);

  //edit
  const [Editname, setEditname] = useState("");
  const [Editemail, setEditemail] = useState("");
  const [EditId, setEditId] = useState("");
  const [Editcoursename, setEditcoursename] = useState("");
  const [isUpdated, setisUpdated] = useState(false);

  const editinstrutor = (row) => {
    console.log("editinstructor", row);
    setEditDailogOpen(!EditDailogOpen);
    setEditname(row.name);
    setEditcoursename(row.coursename);
    setEditemail(row.email);
    setEditId(row._id);
  };

  const updateinstrtor = (EditId) => {
    console.log("editid", EditId);
    let id = EditId;

    try {
      let url = getBaseUrl() + `instructor/updateinstructor/${id}`;
      setisloading(true);

      let temp = {
        name: Editname,
        email: Editemail,
        coursename: Editcoursename,
      };

      axios
        .put(url, temp)
        .then(
          (res) => {
            console.log("response customer purchase :::", res);
            setEditDailogOpen(!EditDailogOpen);
            setisloading(false);
            setisUpdated(!isUpdated);

            //  showNotificationMsz(res.data.msg, "success");
            // props.history.push("/customer-purchace-order")
          },

          (error) => {
            setisloading(false);
            console.log("data response error:::", error);
            //   showNotificationMsz(error, "success");
          }
        )
        .catch((e) => {
          setisloading(false);
          console.log("data response error:::", e);
          // showNotificationMsz(e, "success");
        });
    } catch (error) {}
  };

  useEffect(() => {
    try {
      let url = getBaseUrl() + "instructor/getallinstructor";

      axios.get(url).then(
        (res) => {
          setinstrutorArry(res.data.getinstructor);
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

  const instrutor = () => {
    try {
      let url = getBaseUrl() + "instructor/instructor";
      setisloading(true);

      let temp = {
        name: name,
        email: email,
        password: password,
        coursename: coursename,
      };

      axios
        .post(url, temp)
        .then(
          (res) => {
            console.log("response customer purchase :::", res);
            setisloading(false);
            setisUpdated(!isUpdated);
            setname("");
            setemail("");
            setpassword("");
            setcoursename("");

            //  showNotificationMsz(res.data.msg, "success");
            // props.history.push("/customer-purchace-order")
          },

          (error) => {
            setisloading(false);
            console.log("data response error:::", error);
            //   showNotificationMsz(error, "success");
          }
        )
        .catch((e) => {
          setisloading(false);
          console.log("data response error:::", e);
          // showNotificationMsz(e, "success");
        });
    } catch (error) {}
  };

  const Deletepackages = (row) => {
    let id = row._id;

    try {
      setisloading(true);
      let url = getBaseUrl() + `instructor/deleteinstructor/${id}`;
      axios.delete(url).then(
        (res) => {
          setisloading(false);
          setisUpdated(!isUpdated);
          // showNotificationMsz(res.data.msg, "success");
          console.log("resdeletedata", res);
        },
        (error) => {
          // showNotificationMsz(error, "danger");
          setisloading(false);
        }
      );
    } catch (error) {
      // showNotificationMsz(error, "danger");
      setisloading(false);
    }
  };

  const filterData = [
    {
      name: "jatin",
      email: "user@gmail.com",
      coursename: "React js",
      password: "123456",
    },
    {
      name: "jatin",
      email: "user@gmail.com",
      coursename: "React js",
      password: "123456",
    },
  ];

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
          <div className="Content_topHeading">Manage Instructor</div>
          <hr />

          <div className="text-center sub_content mt-3 mb-2">
            Instructor List
          </div>

          {/* <div className="text-right"><Button className="add_button" onClick={() => navigate("/add-group")}>Add Group</Button></div> */}
          <div
            className="sub_content mt-3 mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => setaddMangeopen(!addMangeopen)}
          >
            <i class="fa fa-plus" aria-hidden="true"></i> Add Instructor
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
                        <div className="text_filed_heading">Name</div>
                        <div className="mr-2 mt-1">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter Name"
                            autoComplete="off"
                            value={name}
                            onChange={(e) => {
                              setname(e.target.value);
                            }}
                          />
                        </div>
                      </Grid>

                      <Grid item md={6}>
                        <div className="text_filed_heading">Course Name</div>
                        <div className="mr-2 mt-1">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter Course Name"
                            autoComplete="off"
                            value={coursename}
                            onChange={(e) => {
                              setcoursename(e.target.value);
                            }}
                          />
                        </div>
                      </Grid>
                    </Grid>

                    <Grid className="Component_main_grid">
                      <Grid item md={6}>
                        <div className="text_filed_heading">Password</div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="email"
                            className="form-control "
                            autoComplete="off"
                            value={password}
                            onChange={(e) => {
                              setpassword(e.target.value);
                            }}
                          />
                        </div>
                      </Grid>

                      <Grid item md={6}>
                        <div className="text_filed_heading">Email</div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="text"
                            className="form-control "
                            autoComplete="off"
                            value={email}
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="mt-2 pb-2 ">
                    <Button
                      variant="contained"
                      className="button_formatting"
                      onClick={instrutor}
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </Expand>

          <div className="mb-3">
            <Card className="p-2 Card_shadow mt-2">
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
                        coursename
                      </StyledTableCell>

                      {/* <StyledTableCell
                        align="left"
                        className="table_header"
                      >
                        password
                      </StyledTableCell> */}

                      <StyledTableCell align="left" className="table_header">
                        Action
                      </StyledTableCell>
                      <StyledTableCell align="left" className="table_header">
                        Edit
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {instrutorArry.map((row) => (
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.email}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.coursename}
                        </StyledTableCell>

                        {/* <StyledTableCell
                          align="left"
                        >
                            {row.password}
                        </StyledTableCell> */}

                        <StyledTableCell align="left">
                          {instructor === false ? (
                            <button
                              type="button"
                              class="btn btn-info mr-3"
                              onClick={() => setinstructor(!instructor)}
                            >
                              Block
                            </button>
                          ) : (
                            <button
                              type="button"
                              class="btn btn-danger mr-3"
                              onClick={() => setinstructor(!instructor)}
                            >
                              UnBlock
                            </button>
                          )}

                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => Deletepackages(row)}
                          >
                            Delete
                          </button>
                        </StyledTableCell>

                        <StyledTableCell align="left">
                          {" "}
                          <button
                            type="button"
                            class="btn btn-info"
                            onClick={() => editinstrutor(row)}
                          >
                            Edit
                          </button>
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
        <Dialog
          open={EditDailogOpen}
          aria-labelledby="form-dialog-title"
          maxWidth="sm"
          fullWidth="fullWidth"
        >
          <DialogTitle>
            Edit Instructor
            <span
              className="float-right icon_color"
              onClick={() => setEditDailogOpen(!EditDailogOpen)}
            >
              <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
            </span>
          </DialogTitle>
          <DialogContent>
            <div className="text_filed_heading">Name</div>
            <div className="mr-2 mt-1">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Name"
                autoComplete="off"
                value={Editname}
                onChange={(e) => {
                  setEditname(e.target.value);
                }}
              />
            </div>
            <div className="text_filed_heading">Course Name</div>
            <div className="mr-2 mt-1">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Course Name"
                autoComplete="off"
                value={Editcoursename}
                onChange={(e) => {
                  setEditcoursename(e.target.value);
                }}
              />
            </div>
            <div className="text_filed_heading">Email</div>
            <div className="mr-2 mt-1">
              <input
                type="text"
                className="form-control "
                placeholder="Enter 
                                  Email"
                autoComplete="off"
                value={Editemail}
                onChange={(e) => {
                  setEditemail(e.target.value);
                }}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              className="button_formatting"
              onClick={() => setEditDailogOpen(!EditDailogOpen)}
            >
              Cancel
            </Button>
            <Button
              className="button_formatting"
              onClick={() => updateinstrtor(EditId)}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Loder loading={isloading} />
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

export default HOC(GroupList);
