import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function House() {
  const { id } = useParams();
  const [house, setHouse] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3002/houses/byId/${id}`).then((response) => {
      setHouse(response.data);
    });
  }, []);

  return (
    <div className='house'>
      <div className='title'>Address: {house?.address}</div>
      <div className='body'>Current value: {house?.currentValue}</div>
      <div className='body'>Loan amount: {house?.loanAmount}</div>
      <div className='footer'>Risk: {house?.risk}%</div>
    </div>
  );
}

export default House;
