import { createContext , useState} from "react";

const FavouriteContext = createContext({
    favourites :[],
    totalFavourites: 0,
    addFavourite : (favouriteMeetup) => {},
    removeFavourite : (meetupId) =>{},
    itemIsFavourite : (meetupId) => {},
});

export function FavouritesContextProvider(props){
    const [userFavourites , setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeetup){
        setUserFavourites((prevFavourites) => {
            return prevFavourites.concat(favouriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId){
        setUserFavourites(prevFavourites => {
            return prevFavourites.filter((meetup) => meetup.id !== meetupId);
        });
    }

    function isFavouriteItemHandler(meetupId){
        return userFavourites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favourites: userFavourites,
        totalFavourites : userFavourites.length,
        addFavourite : addFavouriteHandler,
        removeFavourite : removeFavouriteHandler,
        itemIsFavourite : isFavouriteItemHandler,
    };

    return (
        <FavouriteContext.Provider value={context}>
            {props.children}
        </FavouriteContext.Provider>
    )
}


export default FavouriteContext;