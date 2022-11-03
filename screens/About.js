import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Counter from "../components/Counter";
import { CounterContext } from "../context/CounterContext";

const About = ({ navigation }) => {

  const { counter } = useContext(CounterContext);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>About</Text>
        <Counter counter={ counter } />
        <Button title="Back" type="clear" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.footer}>
        <Text style={{ ...styles.footeritem, marginTop: +60 }}>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "darkorange",
    fontSize: 50,
  },
  footer: {
    position: "absolute",
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: "#4488d6",
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  footeritem: {
    color: "white",
    fontSize: 18,
    width: 60,
    height: 50,
    margin: 50,
  },
});

export default About;
