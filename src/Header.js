import React from 'react';
import { ReactComponent as Logo } from './logo.svg'; 

function Header() {
  return (
    <header className='tc ph4'>
      <Logo />
      <h1 className='f3 f2-m f1-l fw2 black-90 mv3'>corona tracker</h1>
      <h2 className='f5 f4-m f3-l fw2 black-50 mt0 lh-copy'>
        Track and follow daily updates on number of cases globaly and by country
      </h2>
    </header>
  );
}

export default Header;
