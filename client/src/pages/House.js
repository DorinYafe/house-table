import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Crad/Card';

function House() {
  const { id } = useParams();
  const [house, setHouse] = useState();
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/houses/byId/${id}`)
      .then((response) => {
        setIsLoading(true);
        setHouse(response.data);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <Card house={house} />
      )}
    </>
  );
}

export default House;
