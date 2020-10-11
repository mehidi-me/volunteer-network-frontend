import React from "react";
import plus from "../../images/plus1.png";
import user from "../../images/users-alt1.png";
import Logo from "../../images/Group1329.png";
import "./AdminSidbar.css";
import { Link } from "react-router-dom";

const AdminSidbar = (props) => {
  return (
    <>
      <div className="sidbar">
        <div className="admin-logo">
        <Link to="/"><img src={Logo} alt="logo" /></Link>
        </div>
        <ul>
          <li>
            <Link to="/admin/userlist">
              <div className="icon">
                <img src={user} alt="user" />
              </div>
              Volunteer register list
            </Link>
          </li>
          <li>
            <Link to="/admin/addevent">
              <div className="icon">
                <img src={plus} alt="plus" />
              </div>
              Add event
            </Link>
          </li>
        </ul>
      </div>
      <div className="formtitle">
        <h3>{props.title}</h3>
      </div>
    </>
  );
};

export default AdminSidbar;
