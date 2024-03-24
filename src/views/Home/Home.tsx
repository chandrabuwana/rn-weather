import React, { useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar, ActivityIndicator, ScrollView } from 'react-native';
import Button from '@components/Button';
import { StackProps } from '@navigator/stack';
import { colors } from '@theme';
import { windowWidth } from '@utils/deviceInfo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocation, fetchWeather, fetchWeatherLonglat } from "../../store/actions";
import Card from '@components/Card';
import CurrentWeather from '@components/CurrentWeather';
import ForecastDaily from '@components/ForecastDaily';
import ForecastDailyHorizontal from '@components/ForecastDaily/ForecastDailyHorizontal';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    backgroundColor: colors.lightPurple,
    height: 44,
    width: '50%',
  },
});

export default function Home({ navigation }: StackProps) {
  const dispatch = useDispatch();
  const weather = useSelector((state: any) => state.weather.weather);
  // const location = useSelector((state: any) => state.location);
  const weatherLongLat = useSelector((state: any) => state.weather.weatherLongLat);

  useEffect(() => {
    dispatch(fetchWeather("Tangerang"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchLocation());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchWeatherLonglat());
  }, [dispatch]);

  if (!weather && !weatherLongLat) {
    return <ActivityIndicator />
  }
  return (
    <View style={styles.root}>
      <StatusBar barStyle='light-content' />
      {weather && (
        <CurrentWeather currentWeather={weather} />
      )}

      <View style={{ flexDirection: 'row', height: 80, marginHorizontal: 20 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {weatherLongLat.list ? (
            weatherLongLat.list.map((item: any, index: number) => (

              <ForecastDailyHorizontal day={item} index={index} />
            ))
          ) : (
            <Text>Loading</Text>
          )}

        </ScrollView>
      </View>
      <ScrollView
        style={{ width: windowWidth, }}
      >
        {weatherLongLat.list ? (
          weatherLongLat.list.map((item: any, index: number) => (
            <ForecastDaily day={item} index={index} />
          ))
        ) : (
          <Text>Loading</Text>
        )}
      </ScrollView >
    </View >
  );
}
