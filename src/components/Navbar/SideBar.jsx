import React from 'react';
import classes from './SideBar.module.css';

const SideBar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <div className={classes.item}>
          <a href="#">Profile</a>
        </div>
        <div className={classes.item}>
          <a href="#">Messages</a>
        </div>
        <div className={classes.item}>
          <a href="#">News</a>
        </div>
        <div className={classes.item}>
          <a href="#">Music</a>
        </div>
        <div className={classes.item}>
          <a href="#">Profile</a>
        </div>

      </div>
    </nav>
  )
}

export default SideBar;