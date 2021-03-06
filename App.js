import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Header from "./components/Header/Header";
import Total from "./components/Total/Total";
import Icon from "./components/Icon/Icon";
import Gallery from "./components/FlatList/Gallery";
import Nav from "./components/Nav";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Icon style={styles.icon} />
      <Header style={styles.header} />
      <Total style={styles.statistic} />
      <Gallery style={styles.gallery} />
      <Nav style={styles.nav} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  icon: { flex: 0.1, marginTop: 20 },
  header: {
    flex: 0.2,
  },
  statistic: { flex: 0.1 },
  gallery: { flex: 1 },
  nav: {
    flex: 0.1,
  },
});
