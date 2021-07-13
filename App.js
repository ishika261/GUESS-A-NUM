import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GeneralStatusBarColor from "./components/GeneralSatusBarColor";
import Colors from "./constants/Colors";

export default function App() {
    return (
        <View style={styles.screen}>
            <GeneralStatusBarColor backgroundColor={Colors.primary} />
            <Header title="Guess A Number" />
            <StartGameScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
