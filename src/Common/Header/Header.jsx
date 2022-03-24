import React, { useState } from 'react';

//material ui appbar
import { AppBar, Toolbar } from "@material-ui/core";
import sikhlo from "../../Components/images/sikhlo_logo.png"
import sikhlo2 from "../../Components/images/siklo_logo2.png"

//css file
import "./Header.css";
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();
    console.log("header props", props)

    /*local state */
    const [Sidebar, setSidebar] = useState(false);

    /*function to open a sidebar */
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    /*function to close a sidebar */
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }
    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">

                    <div className="d-flex">
                        {/* <span className='pr-3'><img src={sikhlo} alt="" height="50" /></span> */}
                        <span className="toggle_button_sidebar mt-2">
                            <i class="fa fa-bars mr-2"
                                onClick={() => {
                                    props.setLoading();
                                }}>
                            </i></span>
                        <span className='pl-3 mt-1' style={{ color: "#b0dd36" }}><h4>Admin panel</h4></span>
                    </div>

                    <div className="header_grow" />
                    <div className="header_links">
                        <span className="d-flex " >

                            {/* <div className='pr-4'>
                                <div className='search_pcaceholder'>
                                    <input form='form-control ' type="pcaceholder" placeholder='Search By Student Name' /><i class="fa fa-search search_barclass" ></i>
                                </div>
                            </div> */}
                            <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="calendar">
                                <div className='pr-4 '>

                                    <i class="fa fa-calendar calander"></i>
                                </div>
                            </span>

                            <span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Chat">
                                {/* <div className='pr-4 '>

                                    <i class="fa fa-whatsapp whatapp_header"></i>
                                </div> */}
                                {/* <div  className='pr-4 '>
                            <i class="fa fa-power-off" aria-hidden="true"></i>
                            </div> */}
                            </span>




                            <div class="dropdown ">
                                <div data-toggle="dropdown">  <i class="fa fa-power-off mt-2" style={{ fontSize: "23px" }} aria-hidden="true"></i>
                                </div>
                                <div class="dropdown-menu animate slideIn dopdown_formatting">
                                    <div className="dropdownLinks p-2" onClick={() => navigate("/change-password")}>
                                        <span><i className="fa fa-cog mr-3" />Change Password</span>
                                    </div>
                                    <hr />
                                    <div className="dropdownLinks p-2 mt-1" onClick={() => navigate("/")}>
                                        <span><i className="fa fa-sign-out mr-3" />LogOut</span>
                                    </div>

                                </div>
                            </div>
                        </span>

                    </div>
                    <div className="mobile_Burger_Menu">
                        <span
                            className="logout_Pointer_cursor mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i class="fa fa-bars"></i>
                        </span>

                        <div id="mySidenav" className="sidenav">
                            <div className="cross_icon_style">
                                <i
                                    class="fa fa-times cursor"
                                    onClick={() => {
                                        document.getElementById("mySidenav").style.width =
                                            "0px";
                                        setSidebar(false);
                                    }}
                                ></i>
                            </div>
                            {/* <div className="text-center">
                                <img src={sikhlo} alt="" />
                            </div> */}
                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/")}>
                                Dashboard
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                            All Users
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                            Courses
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                            Generate Coupon
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                            Approve course
                            </span>

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                            Reject course
                            </span>

                            {/* <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                            Master Dashboard
                            </span> */}

                            {/* <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Notice Board
                            </span>
                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                User
                            </span>
                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Pages
                            </span>
                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Leads
                            </span>
                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Email Templates
                            </span>
                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Deliveries
                            </span> */}


                            {/* <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("#")}>
                                Change Password
                            </span> */}

                            <span className="logout_Pointer_cursor mt-2" onClick={() => navigate("/")}>
                                Log Out
                            </span>

                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
