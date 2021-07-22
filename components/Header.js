import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import Colors from "../constants/Colors";
import TitleText from "./TitleText";
import AppDimensions from "../constants/AppDimensions";

const Header = (props) => {
    return (
        <View style={styles.main}>
            {/* <View style={styles.top}></View> */}
            <View style={styles.header}>
                <TitleText> {props.title} </TitleText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: AppDimensions.height * 0.12,
    },
    header: {
        position: "absolute",
        width: "100%",
        height: "100%",
        paddingLeft: 5,
        paddingTop: "10%",
        backgroundColor: Colors.secondary,
        justifyContent: "space-around",
        alignItems: "flex-start",
    },
});
export default Header;
