import { getCardinalDirection } from '@utils/helper';
import { View, Text, StyleSheet, Image } from 'react-native'
const CurrentWeather = ({ currentWeather }: { currentWeather: any }) => {
  return (
    <View style={styles.currentView}>
      <View style={styles.mainInfoContainer}>
        <Text style={styles.description}>
          {currentWeather.main &&
            currentWeather.weather[0].description}
        </Text>
        <View style={styles.currentTempView}>
          {currentWeather.weather && (
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`,
              }}
              style={styles.weatherIcon}
            />
          )}
          <Text style={styles.currentDegrees}>
            {Math.round(currentWeather.main && currentWeather.main.temp)}
            °C
          </Text>
        </View>
      </View>
      <View style={styles.secondaryInfoContainer}>
        <View style={styles.row}>
          <View style={styles.detailsBox}>
            <Text style={styles.label}>Wind: {currentWeather.wind.speed}mph {currentWeather.wind &&
              getCardinalDirection(currentWeather.wind.deg)}
            </Text>
          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.label}>Humidity:   {currentWeather.main && currentWeather.main.humidity}%</Text>
          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.label}>High: {currentWeather.main &&
              Math.round(currentWeather.main.temp_max)} °C</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.detailsBox}>
            <Text style={styles.label}>Pressure: {currentWeather.main && currentWeather.main.pressure} hPa</Text>

          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.label}>Visibility:  {currentWeather.visibility &&
              Math.round(currentWeather.visibility / 1000)} km</Text>
          </View>
          <View style={styles.detailsBox}>
            <Text style={styles.label}>Low: {currentWeather.main &&
              Math.round(currentWeather.main.temp_min)} °C</Text>
          </View>
        </View>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  currentView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  mainInfoContainer: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center'
  },

  currentTempView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  weatherIcon: {
    width: 50,
    height: 50
  },

  timezone: {
    color: 'white',
    textAlign: 'center',
    marginTop: 1,
    fontSize: 15
  },

  currentDegrees: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 60
  },

  description: {
    color: 'black',
    fontSize: 15,
    textTransform: 'capitalize'
  },

  secondaryInfoContainer: {
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '95%',
    maxWidth: 478
    , marginBottom: 20
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'black',
    padding: 10
  },

  detailsBox: {
    display: 'flex'
  },

  label: {
    fontSize: 13
  },
  details: {
    color: 'black',
    fontSize: 15,
    textTransform: 'capitalize',
  }
})

export default CurrentWeather;