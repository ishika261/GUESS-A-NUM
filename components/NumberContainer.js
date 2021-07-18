import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const NumberContainer = (props) => {
    return (
        <View style={styles.containter}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containter: {
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 10,
        margin: 10,
        borderRadius: 1000,
        justifyContent: "center",
        alignItems: "center",
    },
    number: {
        color: Colors.tertiary,
        fontSize: 32,
    },
});

export default NumberContainer;
