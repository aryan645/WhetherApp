import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {WhetherType} from '../utilities/WhetherType';
import moment from 'moment';
const ListItem = props => {
  const {dt_txt, min, max, condtion} = props;
  return (
    <View style={styles.item}>
      <Icon name={WhetherType[condtion]?.icon} size={50} color={'white'} />
      <View style={styles.dateTextWrapper}>
        <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>

      <Text style={styles.temp}>{`${Math.round(min)}  / ${Math.round(
        max,
      )}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: 'indianred',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 16,
  },
  dateTextWrapper: {
    flexDirection: 'column',
  },
});

export default ListItem;
