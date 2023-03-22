import React from 'react'
import {useNavigate} from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetups() {

  const navigate = useNavigate();

  function addMeetupHandler(meetupData){

    fetch('https://meetup-react-f4e27-default-rtdb.firebaseio.com/meetups.json', 
    {
      method:'POST',
      body : JSON.stringify(meetupData),
      headers:{
        'Content-Type' : 'application/json'
      }
    }).then(()=>{
      navigate('/',{replace:true});
    })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetups
