import { View, StyleSheet, Text, Image } from 'react-native'
import moment from 'moment'
const ForecastDaily = ({ day, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemDate}>
        <Text>{moment(day?.dt * 1000).format("ddd MMM D")}</Text>
      </View>
      <View style={styles.iconTemprature}>
        <Text style={{ fontSize: 14 }}>{Math.round(day.main.temp_max)}/{Math.round(day.main.feels_like)}°C</Text>
        <Image style={styles.iconWeather}
          source={{
            uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
          }}
          resizeMode={"contain"} // cover or contain its upto you view look
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    maxWidth: 478,
    borderBottomColor: 'gray',
    borderBottomWidth: .5,
  },
  itemDate: {
    textAlign: 'right',
    flex: 1,
  },
  iconTemprature: {
    // textAlign: 'right',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1,
  },
  iconWeather: {
    width: 50,
    height: 50,
  },
  containerDegree: {
    textAlign: 'center',
    flex: 1

  }

})

export default ForecastDaily