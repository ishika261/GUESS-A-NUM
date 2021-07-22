import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/Colors";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <TitleText> The Game is Over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/success.png")}
                        style={styles.image}
                    />
                </View>

                <BodyText style={styles.resultText}>
                    Your phone needed
                    <Text style={styles.highlight}>
                        {" "}
                        {props.guessRounds}
                    </Text>{" "}
                    guesses to guess the number
                    <Text style={styles.highlight}> {props.userChoice}</Text>.
                </BodyText>
            </Card>

            <View style={{ width: "45%" }}>
                <MainButton onPress={props.onRestart}>PLAY AGAIN</MainButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },

    card: {
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: 320,
        height: 320,
        resizeMode: "cover",
    },

    imageContainer: {
        borderRadius: 200,
        borderColor: "black",
        borderWidth: 2,
        margin: 5,
        overflow: "hidden",
    },

    highlight: {
        color: Colors.primary,
        textShadowColor: Colors.tertiary,
        fontSize: 24,
        fontFamily: "cursive-write",
    },

    resultText: {
        textAlign: "center",
        fontSize: 17,
    },
});

export default GameOverScreen;
