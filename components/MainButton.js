import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const MainButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...styles.button, ...props.style }}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 6,
        backgroundColor: Colors.primary,
        borderRadius: 15,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontFamily: "open-sans-bold",
        fontSize: 18,
    },
});

export default MainButton;
