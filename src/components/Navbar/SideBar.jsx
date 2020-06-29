import React from 'react';
import classes from './SideBar.module.css';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <div className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>Profile </NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
        </div>

      </div>
    </nav>
  )
}

export default SideBar;