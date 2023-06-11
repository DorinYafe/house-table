import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Crad/Card';

function Home() {
  const navigate = useNavigate();
  const [listOfHouses, setListOfHouses] = useState();

  useEffect(() => {
    axios.get('http://localhost:3002/houses').then((response) => {
      setListOfHouses(response.data);
    });
  }, []);

  const handleClick = (id) => {
    navigate(`/house/${id}`);
  };
  return (
    <div>
      {listOfHouses &&
        listOfHouses.map((value, key) => {
          return (
            <Card
              house={value}
              key={key}
              onClick={() => handleClick(value?.id)}
            />
          );
        })}
    </div>
  );
}

export default Home;
