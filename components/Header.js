import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Colors from "../constants/Colors";
const Header = (props) => {
    return (
        <View style={styles.main}>
            {/* <View style={styles.top}></View> */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}> {props.title} </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: 100,
    },
    header: {
        position: "absolute",
        width: "100%",
        height: "100%",
        paddingLeft: 5,
        paddingTop: "10%",
        backgroundColor: Colors.secondary,
        justifyContent: "center",
    },

    headerTitle: {
        color: "black",
        fontSize: 24,
    },
});
export default Header;
