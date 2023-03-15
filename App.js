import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TasksScreen from "./src/screens/TasksScreen/TasksScreen";
import React, { StrictMode } from "react";
import GXProvider from "@dilane3/gx";
import store from "./src/gx/store";

export default function App() {
  return (
    <GXProvider store={store}>
      <StrictMode>
        <SafeAreaView style={styles.container}>
          <TasksScreen />
        </SafeAreaView>
      </StrictMode>
    </GXProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
