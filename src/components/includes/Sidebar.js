
import classes from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

import { Fragment, useState } from "react";

const Sidebar = (props) => {
  const [openNav, setOpenNav] = useState(false);

  const sidebarClass = openNav ? classes.navOpen : classes.navClose;

  const toggleNav = () => {
    setOpenNav((state) => !openNav);
  };

  return (
    <Fragment>
      <i className={`fa fa-bars d-block d-md-none ${classes.bars}`} onClick={toggleNav}></i>

      <div id="mySidebar" className={` ${sidebarClass} ${classes.sidebar}`}>
        <h1 className="mb-4">Dash.</h1>

        <NavLink to="/dashboard" onClick={toggleNav} className={props.page === 'dashboard' ? 'activeSidebar': ''}>
          <i className="fa fa-clock-o"></i> Dashboard
        </NavLink>
        <NavLink to="#">
          <i className="fa fa-tags"></i> Transactions
        </NavLink>
        <NavLink to="#">
          <i className="fa fa-calendar-o"></i> Schedules
        </NavLink>
        <NavLink to="users" onClick={toggleNav} className={props.page === 'users' ? 'activeSidebar': ''}>
          <i className="fa fa-user-o"></i> Users
        </NavLink>
        <NavLink to="/settings" onClick={toggleNav} className={props.page === 'settings' ? 'activeSidebar': ''}>
          <i className="fa fa-cog"></i> Settings
        </NavLink>

        <div className={`${classes.footer}`}>
          <NavLink to="#">Help</NavLink>
          <NavLink to="#">Contact Us</NavLink>
        </div>
      </div>

      {/*         
        <a
          href="javascript:void(0)"
          className={classes.closebtn}
          onClick={toggleNav}
        >
          &times;
        </a> */}
      {/* <div id="main" className={mainClass}>
        <button className={classes.openbtn} onClick={toggleNav}>
          &#9776;
        </button>
      </div> */}
    </Fragment>
  );
};

export default Sidebar;
