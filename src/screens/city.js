import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import IconText from '../components/IconText';
const City = ({weatherData}) => {
  const {name, country, population, sunrise, sunset} = weatherData;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assests/city_back.jpg')}
        style={styles.image}>
        <Text style={[styles.cityName, styles.CityText]}> {name}</Text>
        <Text style={[styles.countryName, styles.CityText]}>{country}</Text>
        <View style={[styles.populationWrapper, styles.rowlayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={`Population : ${population}`}
            bodyTextStyles={styles.population}
          />
        </View>
        <View style={[styles.riseWrapper, styles.rowlayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={styles.sunrise}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={styles.sunrise}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  CityText: {
    justifyContent: 'center',
    alignSelf: 'center',

    fontWeight: 'bold',
  },
  population: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  populationWrapper: {
    justifyContent: 'center',
  },
  riseWrapper: {
    justifyContent: 'space-around',
  },
  rowlayout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  sunrise: {
    fontSize: 20,
    color: 'white',
  },
});

export default City;
