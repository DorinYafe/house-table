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

  return <div>{house && house.address}</div>;
}

export default House;
