/** @format */

import React from "react";
import HOC from "../../Common/HOC.jsx";
import { Card } from "@material-ui/core";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
  const navigate = useNavigate();
  const home = [
    { show: "Dashboard", link: "/dashboard", data: "250" },
    { show: "All Users", link: "/user-list" },
    { show: "All Block User", link: "/BlockuserList" },
    { show: "All Instructors", link: "/instructor" },
    { show: "Add Category", link: "/instructor" },
    { show: "Courses", link: "/course" },
    { show: "Generate Coupon", link: "/CouponCode" },
    { show: "Approve course", link: "/dashboard" },
    { show: "Reject course", link: "/dashboard" },
    { show: "Master Dashboard", link: "/dashboard" },
    { show: "Featured Courses", link: "/featuredCourses" },
  ];

  return (
    <>
      <div className="content_padding Page_width">
        <div className="ml-3 mr-3">
          <div className="Content_topHeading">
            <div className="main_div ">
              <div className="container">
                <div className="row">
                  {home.map((item, index) => (
                    <div className="col-md-4  col-lg-4">
                      <Card
                        className="main_card Card_shadow "
                        onClick={() => navigate(`${item.link}`)}
                      >
                        <div className="main_content d-flex justify-content-between">
                          <p>
                            <span className="">
                              <i class="fa fa-plus pr-1" aria-hidden="true"></i>
                            </span>
                            {item.show}
                          </p>
                          <span className="">{item.data}</span>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default HOC(Dashboard);
