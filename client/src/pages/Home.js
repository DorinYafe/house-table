import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Crad/Card';

function Home() {
  const navigate = useNavigate();
  const [listOfHouses, setListOfHouses] = useState();
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3002/houses')
      .then((response) => {
        setIsLoading(true);
        setListOfHouses(response.data);
        setIsLoading(false);
      })
      .catch((error) => setIsError(error.message));
  }, []);

  const handleClick = (id) => {
    navigate(`/house/${id}`);
  };
  return (
    <div>
      {isError ? (
        <div>{isError}</div>
      ) : isLoading ? (
        <div>Loading ...</div>
      ) : (
        listOfHouses &&
        listOfHouses.map((value, key) => {
          return (
            <Card
              house={value}
              key={key}
              onClick={() => handleClick(value?.id)}
            />
          );
        })
      )}
    </div>
  );
}

export default Home;
