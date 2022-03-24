import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {
    faFile,
    faLaptopHouse,
    faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const navigate = useNavigate();
    return (
        <>

            <div className="sidebar_in_mobile_view">
                <ProSidebar collapsed={props.isloading}>
                    <Menu iconShape="circle">
                        <MenuItem onClick={() => navigate("/dashboard")}>Dashboard</MenuItem>
                                            <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>All Users</MenuItem>
                        <MenuItem onClick={() => navigate("/user-list")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>User’s Course</MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Generate Coupon</MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>Approve Course</MenuItem>
                        <MenuItem onClick={() => navigate("#")} icon={<FontAwesomeIcon icon={faPeopleArrows} />}>LogOut</MenuItem>
                     





                    </Menu>
                </ProSidebar>
            </div>

        </>
    );
}

export default Sidebar;
