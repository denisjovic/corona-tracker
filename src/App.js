import React from 'react';
import Search from './Country';
import Global from './Global';
import Header from './Header';
import Footer from './Footer';

function App() {
  let [showCountry, setShowCountry] = React.useState(false);
  let [searchTerm, setSearchTerm] = React.useState('');

  const handleCountry = () => {
    setShowCountry(!showCountry);
    setSearchTerm(searchTerm);
  };

  const today = new Date();
  const date =
    today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

  return (
    <div className='App'>
      <Header />
      <div className='main'>
        {!showCountry || !searchTerm? (
          <Global date={date} />
        ) : (
          <Search link={searchTerm} date={date} />
        )}
        <div className='field'>
          <div className='control'>
            <input
              onChange={(event) => setSearchTerm(event.target.value)}
              className='input is-primary'
              type='text'
              placeholder='Search country...'
            />
            <button
              className='button is-primary'
              id='search'
              onClick={handleCountry}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
