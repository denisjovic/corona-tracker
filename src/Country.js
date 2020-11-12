import React from 'react';
import axios from 'axios';

function Search(props) {
  let [countryData, setCountryData] = React.useState('');

  const fetchCountryData = React.useCallback(() => {
    let countryUrl = `https://disease.sh/v3/covid-19/countries/${props.link}?strict=true`;
    axios({
      method: 'GET',
      url: countryUrl,
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
      },
    })
      .then((response) => {
        if (response) {
          setCountryData(response.data);
        } else {
          alert("Enter valid country!")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.link]);

  React.useEffect(() => {
    fetchCountryData();
  }, [fetchCountryData]);


  return (
    <div>
      <h1 className='f3 f2-m f1-m fw2 black-90 mv3'>Statistics for {countryData.country} on {props.date}</h1>
      <div className='dt dt--fixed'>
        <div className='dtc tc pv4 bg-red shadow-5'>
          <p className='f3 f2-m f1-s fw2 black-90 mv3 grow'>Confirmed: {countryData.cases}</p>
          </div>
        <div className='dtc tc pv4 bg-green shadow-5'>
            <p className='f3 f2-m f1-s fw2 black-90 mv3 grow'>Recovered: {countryData.recovered}</p>
        </div>
        <div className='dtc tc pv4 bg-gray shadow-5'>
        <p className='f3 f2-m f1-s fw2 black-90 mv3 grow'>Deaths: {countryData.deaths}</p>
        </div>
      </div>
    </div>
  );
}

export default Search;
