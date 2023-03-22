import React ,{useContext} from 'react'
import {Link} from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouriteContext from '../../store/favourite-context';

function MainNavigation() {

  const favcontext = useContext(FavouriteContext);
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
                    <Link to='/favouritemeetups'>My Favourites
                    <span className={classes.badge}>{favcontext.totalFavourites}</span></Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default MainNavigation
