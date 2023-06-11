import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Crad/Card';

function House() {
  const { id } = useParams();
  const [house, setHouse] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3002/houses/byId/${id}`).then((response) => {
      setHouse(response.data);
    });
  }, []);

  return <Card house={house} />;
}

export default House;
