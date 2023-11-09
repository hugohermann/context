import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Counter from "../components/Counter";
import { CounterContext } from "../context/CounterContext";

const Home = ({ navigation }) => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>

        <Counter counter={counter} />

        <View style={styles.buttonRow}>
          <View style={[{ width: 200 }]}>
            <Button
              //style={{ width: 200 }}
              icon={<Icon name="minus" color="lightgrey" size={50} />}
              type="clear"
              onPress={() => setCounter(counter - 1)}
            />
          </View>
          <View style={[{ width: 200 }]}>
            <Button
              //style={{ width: 200 }}
              icon={<Icon name="plus" color="lightgrey" size={50} />}
              type="clear"
              onPress={() => setCounter(counter + 1)}
            />
          </View>
        </View>

        <Button
          style={{ marginTop: 50 }}
          title="Go to About Screen"
          type="clear"
          onPress={() => navigation.navigate("About")}
        />
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
  buttonRow: {
    flex: 0.3,
    display: "flex",
    flexDirection: "row",
    marginTop: 100,
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

export default Home;
