// import React from 'react';
// import './homepage.styles.scss';
// import Directory from '../../components/directory/directory.component';

// const HomePage = () => (
//   <div className='homepage'>
//     <Directory />
//   </div>
// );

// export default HomePage;

import React from 'react';

import { HomePageContainer } from './homepage.styles';

import Directory from '../../components/directory/directory.component';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
