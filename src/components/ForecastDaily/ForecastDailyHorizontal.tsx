import { View, StyleSheet, Text, Image } from 'react-native'
import moment from 'moment'
const ForecastDailyHorizontal = ({ day, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconTemprature}>
        <Text>{moment(day?.dt * 1000).format("ha")}</Text>
        <Image style={styles.iconWeather}
          source={{
            uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
          }}
          resizeMode={"contain"}
        />
        <Text style={{ fontSize: 14 }}>{Math.round(day.main.feels_like)}°C</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 478,
  },
  itemDate: {
    textAlign: 'right',
    flex: 1,
  },
  iconTemprature: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

export default ForecastDailyHorizontal