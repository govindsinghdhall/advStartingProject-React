import React from 'react';
import EventsList from '../components/EventsList';
import {useLoaderData} from 'react-router-dom';

function EventsPage () {
  const data = useLoaderData ();

  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader () {
  // Can use any javascript browser functions
  // localStorage
  // cookies
  // can't use React Hooks

  const response = await fetch ('http://localhost:8080/events');

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'};
    throw new Response (JSON.stringify ({message: 'Could not fetch events.'}), {
      status: 500,
    });
    
  } else {
    // const resData = await response.json ();
    return response;
  }
}

// return resData.events;
// const res = new Response ('any data', {status: 201}); // response constructor

// import {useLoaderData} from 'react-router-dom';
//   const events = useLoaderData ();
//   <EventsList events={events}
//   const [isLoading, setIsLoading] = useState (false);
//   const [fetchedEvents, setFetchedEvents] = useState ();
//   const [error, setError] = useState ();

//   useEffect (() => {
//     async function fetchEvents () {
//       setIsLoading (true);
//   const response = await fetch ('http://localhost:8080/events');

//   if (!response.ok) {
//     setError ('Fetching events failed.');
//   } else {
//     const resData = await response.json ();
//     setFetchedEvents (resData.events);
//   }
//       setIsLoading (false);
//     }

//     fetchEvents ();
//   }, []);
//   return (
//     <React.Fragment>
//       <div style={{textAlign: 'center'}}>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//       </div>
//       {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
//     </React.Fragment>
//   );
// }

// import { Link } from "react-router-dom";

// const DUMMY_EVENTS = [
//     {
//         id: 'e1',
//         title: 'Some Event'
//     },
//     {
//         id: 'e2',
//         title: 'Another Some Event'
//     },
// ]

// function EventsPage () {
//   return (<><h1>Events</h1>
//   <ul>
//     {DUMMY_EVENTS.map((event) => (
//         <li key={event.id}>
//             <Link to={event.id}>{event.title}</Link>
//         </li>
//     ))}
//     </ul></>)
// }

// export default EventsPage;
