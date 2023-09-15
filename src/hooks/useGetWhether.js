import React, {useState, useEffect} from 'react';

import Geolocation from '@react-native-community/geolocation';
import {WHETHER_API_KEY} from '@env';
export const useGetWhether = () => {
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWhether] = useState([]);

  const FetchWhetherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WHETHER_API_KEY}&units=metric`,
      );
      const data = await res.json();
      setWhether(data);
    } catch (error) {
      setError('Cannot fetch weather');
    } finally {
      setLoading(false);
    }
  };

  const getGeolocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => setError(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };
  useEffect(() => {
    getGeolocation();
  }, []);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      FetchWhetherData();
    }
  }, [latitude, longitude]);

  return [loading, error, weather];
};
