import axios from 'axios';
import React, { useState, useEffect } from 'react';


function Global(props) {
  let [responseData, setResponseData] = useState('');

  const url = 'https://corona.lmao.ninja/v2/all';

  const fetchData = React.useCallback(() => {
    axios({
      method: 'GET',
      url: url,
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
      },
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
      <div>
      <h1 className='f3 f2-m f1-m fw2 black-90 mv3'>Global statistics on {props.date}</h1>
      <div className='dt dt--fixed'>
        <div className='dtc tc pv4 bg-red shadow-5'>
          <p className='f3 f2-m f1-s fw2 black-90 mv3'>Confirmed: {responseData.cases}</p>
        </div>
        <div className='dtc tc pv4 bg-green shadow-5'>
          <p className='f3 f2-m f1-s fw2 black-90 mv3'>Recovered: {responseData.recovered}</p>
        </div>
        <div className='dtc tc pv4 bg-gray shadow-5'>
          <p className='f3 f2-m f1-s fw2 black-90 mv3'>Deaths: {responseData.deaths}</p>
        </div>
      </div>
      </div>
  );
}

export default Global;
