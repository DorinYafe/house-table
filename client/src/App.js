import { useEffct, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [listOfHouses, setListOfHouses] = useState();

  useEffect(() => {
    axios.get('http://localhost:3002/houses').then((response) => {
      setListOfHouses(response.data);
    });
  }, []);

  return (
    <div className='App'>
      {listOfHouses &&
        listOfHouses.map((value, key) => {
          return (
            <div className='house' key={key}>
              <div className='title'>Address: {value.address}</div>
              <div className='body'>Current value: {value.currentValue}</div>
              <div className='body'>Loan amount: {value.loanAmount}</div>  
              <div className='footer'>Risk: {value.risk}</div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
