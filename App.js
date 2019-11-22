import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import AppNav from "./components/Nav";
import { initializeStorage } from "./util/api";
import { setLocalNotifications, clearLocalNotification } from "./util/helpers";
import Constants from "expo-constants";

class App extends Component {
  componentDidMount() {
    initializeStorage();
  }

  render() {
    clearLocalNotification().then(setLocalNotifications);
    return (
      <View style={styles.container}>
        <View
          style={{
            height: Constants.statusBarHeight,
            backgroundColor: "#000000"
          }}
        >
          <StatusBar translucent />
        </View>
        <AppNav />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
