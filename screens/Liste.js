import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button, PricingCard } from "react-native-elements";

const Liste = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Text style={styles.text}>Liste</Text>
        <Button title="Back" type="clear" onPress={() => navigation.goBack()} />
        <ScrollView>
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$1"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff', onPress: () => console.log('onPress1') }}
          />
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$2"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff', onPress: () => console.log('onPress2') }}
          />
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$3"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff', onPress: () => console.log('onPress3') }}
          />
        </ScrollView>
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

export default Liste;
