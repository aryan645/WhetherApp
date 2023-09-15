import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Rowtext from '../components/RowText';
import {WhetherType} from '../utilities/WhetherType';
function CurrentWhether({weatherData}) {
  const {
    main: {temp, feels_like, temp_max, temp_min},
    weather,
  } = weatherData;

  const weatherCOndition = weather[0].main;
  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        {backgroundColor: WhetherType[weatherCOndition].backgroundColor},
      ]}>
      <View style={styles.container}>
        <Text>Current whether</Text>
        <Icon
          name={WhetherType[weatherCOndition].icon}
          color={'coral'}
          size={40}
        />
        <Text style={styles.temp}> {`Temperature: ${temp}`}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}`} </Text>
        <Rowtext
          message1={`High :${temp_max}`}
          message2={`low :${temp_min}`}
          containerStyles={styles.Combine}
          message1Styles={styles.HiLow}
          message2Styles={styles.HiLow}
        />
      </View>
      <Rowtext
        message1={weather[0].description}
        message2={WhetherType[weatherCOndition].message}
        containerStyles={styles.bodyWrapper}
        message1Styles={styles.description}
        message2Styles={styles.message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: 'lightgreen',
    flex: 1,
  },
  temp: {
    color: 'black',
    fontSize: 32,
  },
  feels: {
    color: 'black',
    fontSize: 26,
  },
  HiLow: {
    color: 'black',
    fontSize: 20,
  },
  Combine: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 20,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWhether;
