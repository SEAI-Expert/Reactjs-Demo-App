import React from 'react';
// Importing a hook from react
// use Effect hook is used to run piece of code under some conditions
import { useState, useEffect } from 'react';
import MeetupList from '../Component/meetups/MeetupList';

function AllMeetupsPage(){
  const [isloading, setIsLoading] =useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  
  // This will help us to to run the piece of code of only first time when this component is rendered
  useEffect(()=>{
    setIsLoading(true)
    fetch(
      'https://getting-started-react-a77b3-default-rtdb.firebaseio.com/Meetups.json',
      
    ).then(response => {
      return response.json();
    }).then(data => {
      // Fetching data from an object into array
      const meetups = [];

      for(const key in data){
        const meetup ={
          id: key,
          ...data[key]
        };
        meetups.push(meetup)
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);


  if (isloading){
    return <>
    <section>
      <p>Loading...</p>
    </section>
    </>
  }
    return (
    <>
        <section>
            <h1>All Meetups</h1>
            <ul>
              <MeetupList meetups={loadedMeetups} />
            </ul>
        </section>    
    </>);
}

export default AllMeetupsPage;