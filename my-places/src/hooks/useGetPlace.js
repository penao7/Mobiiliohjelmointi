import { useState } from 'react';
import axios from 'axios';

const useFindPlace = () => {

  const [place, setPlace] = useState({
    title: '',
    region: {
      lat: 0,
      lng: 0
    }
  });

  const getPlace = (queryString) => {
    axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=R66qXAbmT3mAaYG9LJ4rY7mTkSxyX6fL&location=${queryString}`)
      .then(res => setPlace({
        title: res.data.results[0].providedLocation.location,
        region: res.data.results[0].locations[0].latLng
      })
      )
      .catch(err => console.log(err));
  };

  return {
    place,
    getPlace
  };

};

export default useFindPlace;

