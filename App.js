import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GeneralStatusBarColor from "./components/GeneralSatusBarColor";
import Colors from "./constants/Colors";

export default function App() {
    const [userNumber, setUserNumber] = useState();

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
    };

    let content = <StartGameScreen onStartGame={startGameHandler} />;
    if (userNumber) {
        content = <GameScreen />;
    }
    return (
        <View style={styles.screen}>
            <GeneralStatusBarColor backgroundColor={Colors.primary} />
            <Header title="Guess A Number" />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fce4ec",
    },
});
