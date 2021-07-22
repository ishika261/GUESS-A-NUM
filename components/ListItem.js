import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";

const ListItem = (props) => {
    return (
        <View
            key={props.guess}
            {...props}
            style={{ ...styles.listItem, ...props.style }}
        >
            <Text style={styles.highlight}>#{props.index}</Text>
            <Text style={styles.highlight}>|</Text>
            <Text style={styles.highlight}>{props.guess}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        //backgroundColor: Colors.secondary,
        flexDirection: "row",
        paddingHorizontal: 15,
        marginVertical: 10,
        marginHorizontal: 30,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "space-around",
    },
    highlight: {
        color: Colors.primary,
        textShadowColor: Colors.tertiary,
        fontSize: 24,
        fontFamily: "open-sans-bold",
    },
});

export default ListItem;
