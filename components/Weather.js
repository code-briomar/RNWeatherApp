import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  let API_KEY = "e266a699f6f649ead3cb03ef3e426aa3";
  let location = "Nairobi";
  const getWeatherData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    );
    //GET request to OpenWeatherMap API to get data of a city in Metric Units
    const data = await response.json();
    setWeatherData(data);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <View style={pretty.container}>
      {weatherData && (
        <>
          <Text>Location : {location}</Text>
          <Text>Current Weather: {weatherData.weather[0].description}</Text>
          <Text>Temperature: {weatherData.main.temp}°C</Text>
        </>
      )}
    </View>
  );
};

const pretty = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Weather;
