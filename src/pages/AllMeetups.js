import React , {useState,useEffect} from 'react';
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  
  const [ loading, setLoading] = useState(true);
  const [ loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    setLoading(true);
    fetch('https://meetup-react-f4e27-default-rtdb.firebaseio.com/meetups.json')
    .then((response)=>{
      return response.json();
    }).then((data)=>{

      const meetups=[];

      for(const keys in data){
        const meetup = {
          id:keys,
          ...data[keys]
        }
        meetups.push(meetup);
      }

      setLoading(false);
      setLoadedMeetups(meetups);
    });
  },[]);

  if(loading){
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups}/>
    </section>
  )
}

export default AllMeetups
