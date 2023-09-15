import React from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import ListItem from '../components/ListItem';

const UpcomingWhether = ({weatherData}) => {
  const renderItem = ({item}) => (
    <ListItem
      condtion={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.contianer}>
      <ImageBackground
        source={require('../../assests/fantas.jpg')}
        style={styles.image}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'cyan',
  },

  image: {
    flex: 1,
  },
});

export default UpcomingWhether;
