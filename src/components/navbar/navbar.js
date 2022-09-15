import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import './navbar.css'
import Logo from '../logo/logo';
import ImgButton from '../imgbutton/imagebtn';
import homeIcon from './../images/homeicon.png';
import notificationicon from './../images/notificationicon.png'
import addposticon from './../images/addposticon.png'
import { Avatar } from "@material-ui/core";


const Navbar=()=> {
  return (
    
        <div className='navbar'>
        <Logo/>
        <div className="searchbar">
          <form>
            <SearchIcon className="searchIcon" fontSize="small" />
            <input type="text" id="filter" placeholder="Search" className="searchBarInput"/>
          </form>
        </div>
        <div className='navbarbuttons'>
            <ImgButton imgurl={homeIcon}/>
            <ImgButton imgurl={notificationicon}/>
            <ImgButton imgurl={addposticon}/>
        </div>
        <Avatar
          className="post_avatar"
          alt="EpicEby"
        />
        
    </div>
    
    
  )
}

export default Navbar
