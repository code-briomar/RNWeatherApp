import { View, Text, StyleSheet, Animated } from "react-native";

//Custom React Components
import Weather from "./components/Weather";
// import { API_KEY } from "./components/WeatherAPIKey";

const App = () => {
  return (
    <>
      <View style={pretty.container}>
        <Weather />
      </View>
    </>
  );
};

const pretty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
