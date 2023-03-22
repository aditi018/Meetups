import React , {useContext} from 'react'
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavouriteContext from '../../store/favourite-context';

function MeetupItem(props) {
  const favContext = useContext(FavouriteContext);

  const itemIsFavourite = favContext.itemIsFavourite(props.id);


  function toggleFavouriteStatusHandler(){
    if(itemIsFavourite){
      favContext.removeFavourite(props.id);
    }else{
      favContext.addFavourite({
        id: props.id,
        title:props.title,
        image:props.image,
        address:props.address,
        description : props.description,
      })
    }
  }

  return (
    <Card>
    <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove From Favorites' : 'To Favorites'}</button>
        </div>
    </li>
    </Card>
  )
}

export default MeetupItem
