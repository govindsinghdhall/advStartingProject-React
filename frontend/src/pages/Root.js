import React from 'react';
import {Outlet} from 'react-router-dom';

import classes from './Root.module.css';
import MainNavigation from '../components/MainNavigation';

function RootLayout () {


  return (
    <React.Fragment>
      <MainNavigation />
      
      <main className={classes.content}>
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default RootLayout;

// useNavigation

// {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
//   const navigation = useNavigation ();

//   navigation.state === ''
  // const events = useLoaderData()
  // console.log(events);