import React, { useState, useRef, useEffect } from "react";
import {
    View,
    StyleSheet,
    Alert,
    ScrollView,
    Text,
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/Colors";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import ListItem from "../components/ListItem";

const generateHalf = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const half = Math.floor((max + min) * 0.5);
    return half;
};

const _renderItem = (listLength, itemData) => (
    <ListItem guess={itemData.item} index={listLength - itemData.index} />
);

const GameScreen = (props) => {
    const initialGuess = generateHalf(1, 1000);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    const { userChoice, onGameOver } = props;

    const currentLow = useRef(1);
    const currentHigh = useRef(1000);
    const noOfMoves = useRef(1);

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(noOfMoves.current);
        }
    }, [noOfMoves.current, userChoice, onGameOver]);

    const nextGuessHandler = (direction) => {
        // console.log(direction);
        // console.log(currentGuess);
        // console.log(pastGuesses);
        // console.log(props.userChoice);
        if (
            (direction === "lower" && currentGuess < props.userChoice) ||
            (direction === "greater" && currentGuess > props.userChoice)
        ) {
            Alert.alert("Don't Lie !", "You know this is wrong.", [
                { text: "Sorry", style: "cancel" },
            ]);

            return;
        }

        if (direction === "lower") {
            currentHigh.current = currentGuess - 1;
        } else {
            currentLow.current = currentGuess + 1;
        }

        noOfMoves.current = noOfMoves.current + 1;
        var nextGuess = generateHalf(currentLow.current, currentHigh.current);
        setCurrentGuess(nextGuess);
        // if (nextGuess == props.userChoice) {
        // 	Alert.alert(
        // 		"Computer Guessed the num you chose!",
        // 		"It took " + noOfMoves.current + " moves",
        // 		[{ text: "Yay! ", style: "cancel" }]
        // 	);
        // 	props.userChoice = 0;
        // }
        setPastGuesses((currPastGuesses) => [nextGuess, ...currPastGuesses]);
    };

    return (
        <View style={styles.screen}>
            <Card style={styles.GuessContainer}>
                <BodyText>Computer's Guess: </BodyText>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <MainButton
                        onPress={nextGuessHandler.bind(this, "lower")}
                        style={{ backgroundColor: Colors.tertiary }}
                    >
                        <Ionicons name="md-remove" size={34} color="white" />
                    </MainButton>
                    <MainButton
                        onPress={nextGuessHandler.bind(this, "greater")}
                        style={{ backgroundColor: Colors.primary }}
                    >
                        <Ionicons name="md-add" size={34} color="white" />
                    </MainButton>
                </View>
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => (
                        <ListItem
                            guess={guess}
                            index={pastGuesses.length - index}
                        />
                    ))}
                </ScrollView> */}
                <FlatList
                    contentContainerStyle={styles.list}
                    keyExtractor={(item) => item.toString()}
                    data={pastGuesses}
                    renderItem={_renderItem.bind(this, pastGuesses.length)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },

    GuessContainer: {
        marginTop: 25,
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

    listContainer: {
        flex: 1,
        width: "80%",
    },

    list: {
        flexGrow: 1,
        justifyContent: "flex-start",
    },
});

export default GameScreen;
