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

import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

function FeaturedCourses() {
  const [addMangeopen, setaddMangeopen] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
  const [featuredCourse, setFeaturedCourse] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [isUpdated, setisUpdated] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [EditDailogOpen, setEditDailogOpen] = useState(false);
  const [isloading, setisloading] = useState(false);

  const [editTitle, setEditTitle] = useState("");
  const [editImage, setEditImage] = useState(null);
  const [EditId, setEditId] = useState("");

  const editFeaturedCourse = (row) => {
    console.log("editinstructor", row);
    setEditDailogOpen(!EditDailogOpen);
    setEditTitle(row.coursename);
    setEditId(row._id);
    // setEditImage(row.coursename);
  };

  const filterData = [
    {
      image:
        "https://media.istockphoto.com/photos/productivity-takes-a-hands-on-approach-picture-id1291770278?b=1&k=20&m=1291770278&s=170667a&w=0&h=S3V05Sagf9lHtcogndOmWUGVLsAZ89d8DAC7SOSl_lA=",
      title: "Course",
      authorname: "Nishant",
      description: "Lorem span ......",
    },
  ];

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getFeaturedCourses = () => {
    axios
      .get("https://r-education.herokuapp.com/user/getfeaturedcourse")
      .then((response) => {
        console.log("data is", response);
        const list = response.data;
        setFeaturedCourse(list);
        // setisloading(false);
      });
  };

  const addFeaturedCourse = () => {
    let url = "https://r-education.herokuapp.com/user/addfeaturedcourse";
    // setIsLoading(true);

    let temp = {
      title,
      image,
    };
    axios
      .post(url, temp)
      .then(
        (res) => {
          console.log("data response:::", res);
          // setIsLoading(false);
          // props.history.push("/profile");
          // localStorage.setItem("token", res.data.loginToken);
          // showNotificationMsz(res.data.msg, "success");
        },

        (error) => {
          // setIsLoading(false);
          console.log("data response error:::", error);
          // showNotificationMsz(error, "danger");
        }
      )
      .catch((e) => {
        // setIsLoading(false);
        console.log("data response error:::", e);
        // showNotificationMsz(e, "danger");
      });
  };

  const deleteFeaturedCourse = (row) => {
    let id = row._id;

    try {
      setisloading(true);
      let url = `https://r-education.herokuapp.comu/deletefeaturedcourse/${id}`;
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

  useEffect(() => getFeaturedCourses(), []);
  return (
    <>
      <div className="Page_width content_padding">
        <div className="ml-3 mr-3">
          <div className="Content_topHeading">Featured Courses</div>
          <hr />

          <div className="text-center sub_content mt-3 mb-2">
            {" "}
            Featured Courses List
          </div>

          <div
            className="sub_content mt-3 mb-3"
            style={{ cursor: "pointer" }}
            onClick={() => setaddMangeopen(!addMangeopen)}
          >
            <i class="fa fa-plus" aria-hidden="true"></i> Add New Featured
            Course
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
                        <div className="text_filed_heading">Select Image</div>
                        <div className="mr-2 mt-1">
                          <input
                            type="file"
                            className="form-control "
                            placeholder="Enter Coupon code"
                            autoComplete="off"
                            value={image}
                            onChange={(e) => {
                              setImage(e.target.files[0]);
                            }}
                          />
                        </div>
                      </Grid>

                      <Grid item md={6}>
                        <div className="text_filed_heading">Title</div>
                        <div className="mr-2 mt-1">
                          <input
                            type="text"
                            className="form-control "
                            placeholder="Enter Point"
                            autoComplete="off"
                            value={title}
                            onChange={(e) => {
                              setTitle(e.target.value);
                            }}
                          />
                        </div>
                      </Grid>
                    </Grid>

                    {/* <Grid className="Component_main_grid">
                      <Grid item md={6}>
                        <div className="text_filed_heading">Author Name</div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="text"
                            className="form-control "
                            autoComplete="off"
                          />
                        </div>
                      </Grid>

                      <Grid item md={6}>
                        <div className="text_filed_heading">Description</div>
                        <div className=" mr-2  mt-1">
                          <input
                            type="text"
                            className="form-control "
                            autoComplete="off"
                          />
                        </div>
                      </Grid>
                    </Grid> */}
                  </div>
                  <div className="mt-2 pb-2 ">
                    <Button
                      variant="contained"
                      className="button_formatting"
                      onClick={addFeaturedCourse}
                    >
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
                        Course Name
                      </StyledTableCell>
                      {/* <StyledTableCell align="left" className="table_header">
                        Title
                      </StyledTableCell> */}

                      {/* <StyledTableCell align="left" className="table_header">
                        Auther Name
                      </StyledTableCell> */}

                      {/* <StyledTableCell align="left" className="table_header">
                        Description
                      </StyledTableCell> */}

                      {/* <StyledTableCell align="left" className="table_header">
                        Action
                      </StyledTableCell>
                      <StyledTableCell align="left" className="table_header">
                        Add Vedio
                      </StyledTableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {featuredCourse.featurecourse?.map((row) => (
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          <img
                            style={{ height: "80px", width: "90px" }}
                            src={row.videos}
                          />
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.coursename}
                        </StyledTableCell>
                        {/* <StyledTableCell align="left">
                          {row.instructorName}
                        </StyledTableCell>

                        <StyledTableCell align="left">
                          {row.description}
                        </StyledTableCell> */}

                        <StyledTableCell align="left">
                          {/* <button
                            type="button"
                            class="btn btn-info mr-3"
                            onClick={() => editFeaturedCourse(row)}
                          >
                            Edit
                          </button> */}

                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => deleteFeaturedCourse(row)}
                          >
                            Delete
                          </button>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {/* <span
                            className="text-info"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/AddVedio")}
                          >
                            <i class="fa fa-plus" aria-hidden="true"></i> Add
                            Video
                          </span> */}
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
            <div className="text_filed_heading">Title</div>
            <div className="mr-2 mt-1">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Name"
                autoComplete="off"
                value={editTitle}
                onChange={(e) => {
                  setEditTitle(e.target.value);
                }}
              />
            </div>
            <div className="text_filed_heading">Image</div>
            <div className="mr-2 mt-1">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Course Name"
                autoComplete="off"
                value={editImage}
                onChange={(e) => {
                  setEditImage(e.target.value);
                }}
              />
            </div>
            {/* <div className="text_filed_heading">Email</div>
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
            </div> */}
          </DialogContent>
          <DialogActions>
            <Button
              className="button_formatting"
              onClick={() => setEditDailogOpen(!EditDailogOpen)}
            >
              Cancel
            </Button>
            {/* <Button
              className="button_formatting"
              onClick={() => updateinstrtor(EditId)}
            >
              Save
            </Button> */}
          </DialogActions>
        </Dialog>
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

export default HOC(FeaturedCourses);
