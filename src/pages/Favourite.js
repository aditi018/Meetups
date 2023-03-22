import React , {useContext} from 'react'
import FavouriteContext from '../store/favourite-context'
import MeetupList from '../components/meetups/MeetupList';
function Favourite() {

  const favContext = useContext(FavouriteContext);

  let content;

  if(favContext.totalFavourites === 0){
    content = <p>You got no favourites yet. Start adding some.</p>
  }else{
    content = <MeetupList meetups=  {favContext.favourites}/>
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default Favourite
