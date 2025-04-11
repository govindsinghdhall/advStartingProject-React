import React from 'react';
import {redirect, useLoaderData, useRouteLoaderData} from 'react-router-dom';
import EventItem from '../components/EventItem';

function EventDetailPage () {
  //   const params = useParams ();
  const data = useRouteLoaderData ('event-detail');

  return (
    <React.Fragment>
      <EventItem event={data.event} />
    </React.Fragment>
  );
}

export default EventDetailPage;

export async function loader({request, params}) {
  const id = params.eventId;
  const response = await fetch ('http://localhost:8080/events/' + id);
  if (!response.ok) {
    throw new Response (
      JSON.stringify ({message: 'Could not fetch details for selected event.'}),
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({params, request}) {
  console.log (request);

  const eventId = params.eventId;
  const response = await fetch ('http://localhost:8080/events/' + eventId, {
    method: request.method,
    // DELETE METHOD
  });

  if (!response.ok) {
    throw new Response (JSON.stringify ({message: 'Could not  event.'}), {
      status: 500,
    });
  }
  return redirect ('/events');
}
