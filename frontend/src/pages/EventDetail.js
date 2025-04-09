import React from 'react';
import {useParams} from 'react-router-dom';

function EventDetailPage () {
  const params = useParams ();

  return (
    <React.Fragment>
      <h1>Event Detail</h1>
      <p>Events ID: {params.eventId}</p>
    </React.Fragment>
  );
}

export default EventDetailPage;
