import { View, Text, StyleSheet } from 'react-native';

const Card = ({ weather }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Wind: {weather.wind.speed} mph.E</Text>
      </View>
      <View style={styles.item}>
        <Text>Humidity: {weather.main.humidity}%</Text>
      </View>
      <View style={styles.item}>
        <Text>UV index</Text>
      </View>
      <View style={styles.item}>
        <Text>Pressure</Text>
      </View>
      <View style={styles.item}>
        <Text>Visibility</Text>
      </View>
      <View style={styles.item}>
        <Text>Dew point</Text>
      </View>
    </View>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 20,
    height: 20,
    alignItems: 'center'
    // alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {

    width: '33%' // is 50% of container width
  }
});

export default Card;
