import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Counter = props => 
        <Text style={styles.counter}>{props.counter}</Text>;

const styles = StyleSheet.create({
    counter: {
        color: 'darkorange',
        fontSize: 180
    },
});

export default Counter;