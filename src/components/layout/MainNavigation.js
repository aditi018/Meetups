import React from 'react'
import {Link} from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/newmeetups'>Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favouritemeetups'>Favourite Meetups</Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default MainNavigation
