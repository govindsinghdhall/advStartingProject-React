import {useRouteError} from 'react-router-dom';
import PageContent from '../components/PageContent';
import React from 'react';
import MainNavigation from '../components/MainNavigation';

function ErrorPage () {
  const error = useRouteError ();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = JSON.parse (error.data).message;
  }

  if (error.status === 404) {
    title = 'Not Found!';
    message = 'Could not find resource or page.';
  }
  return (
    <React.Fragment>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </React.Fragment>
  );
}

export default ErrorPage;
