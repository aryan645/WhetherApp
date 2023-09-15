import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/tabs';
import Geolocation from '@react-native-community/geolocation';
import {WHETHER_API_KEY} from '@env';
import {useGetWhether} from './src/hooks/useGetWhether';
import ErrorItem from './src/components/errorItem';
function App() {
  const [loading, error, weather] = useGetWhether();

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} color={'blue'} />
      ) : (
        <ErrorItem />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center', //  to center horizontally
    flex: 1,
  },
});

export default App;
