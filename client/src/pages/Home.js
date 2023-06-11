import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [listOfHouses, setListOfHouses] = useState();

  useEffect(() => {
    axios.get('http://localhost:3002/houses').then((response) => {
      setListOfHouses(response.data);
    });
  }, []);
  return (
    <div>
      {listOfHouses &&
        listOfHouses.map((value, key) => {
          return (
            <div
              className='house'
              key={key}
              onClick={() => navigate(`/house/${value.id}`)}>
              <div className='title'>Address: {value.address}</div>
              <div className='body'>Current value: {value.currentValue}</div>
              <div className='body'>Loan amount: {value.loanAmount}</div>
              <div className='footer'>Risk: {value.risk}%</div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
