import React from "react";
import "./Sidebar.css";
import Avatar from '@mui/material/Avatar';
function Sidebar(){
  return(
    <div className="sidebar">
      {/* <h1>iam a sidebar</h1> */}
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="missing"/>
        <Avatar src="" className="sidebar__avatar"/>
        <h2>Athif Ahamed</h2>
        <h4>athifahamedj@gmail.com</h4>
     
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,567</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">4,567</p>
        </div>
      </div>

      <div className="sidebar__bottom">
       <p>Recent</p>
      </div>


    </div>
  );

}
export default Sidebar;