import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Card from "../components/Card";

import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/Colors";
const generateHalf = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const half = Math.floor((max + min) * 0.5);
    return half;
};

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateHalf(1, 100));

    return (
        <View style={styles.screen}>
            <Card style={styles.GuessContainer}>
                <Text>Computer's Guess: </Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <View style={{ width: "45%" }}>
                        <Button
                            title="LESSER"
                            onPress={() => {}}
                            color={Colors.tertiary}
                        />
                    </View>
                    <View style={{ width: "45%" }}>
                        <Button
                            title="GREATER"
                            onPress={() => {}}
                            color={Colors.primary}
                        />
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    GuessContainer: {
        maxWidth: "80%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },

    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 1,
    },
});

export default GameScreen;
