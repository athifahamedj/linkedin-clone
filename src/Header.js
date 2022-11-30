import React from 'react';
import "./Header.css";
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
return (
<React.Fragment> 
  <div className='header'>
 
    <div className="header__left">

      <img src= "https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="no image"/>
     

      <div className="header__search">

        <SearchIcon/>

        <input type="text" placeholder='Search'></input>

      </div>

    </div>
    <div className="header__right">
      <HeaderOption title='Home' Icon={HomeIcon}/>
      <HeaderOption title='My Network' Icon={SupervisorAccountIcon}/>
      <HeaderOption title='Jobs' Icon={BusinessCenterIcon}/>
      <HeaderOption title='Messaging' Icon={ChatIcon}/>
      <HeaderOption title='Notifications' Icon={NotificationsIcon}/>

      <HeaderOption avatar="https://athif-portfolio.netlify.app/static/media/me.92d11b4d801fb246b373.jpeg" alt="no img" title="Me"/>

    </div>
   
   </div>
   
   </React.Fragment>
  

)

}

export default Header;