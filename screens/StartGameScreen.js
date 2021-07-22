import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Button,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ToastAndroid,
    Alert,
    Image,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/Colors";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import AppDimensions from "../constants/AppDimensions";

const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    let confirmedOutput;

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    };

    const resetInputHandler = () => {
        setEnteredValue("");
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 999) {
            Alert.alert(
                "INVALID NUMBER!",
                "Number has to be a number between 1 and 999",
                [
                    {
                        text: "Okay",
                        style: "destructive",
                        onPress: resetInputHandler,
                    },
                ]
            );
            // ToastAndroid.show("Enter a Valid Number!", ToastAndroid.SHORT);
            return;
        }
        setConfirmed(true);
        Keyboard.dismiss();
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
    };

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText>Chosen Number:</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton
                    onPress={() => props.onStartGame(selectedNumber)}
                    style={{ backgroundColor: Colors.tertiary }}
                >
                    START THE GAME
                </MainButton>
            </Card>
        );
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss();
                    }}
                >
                    <View style={styles.screen}>
                        <Text style={styles.title}>Start a New Game!</Text>
                        <Image
                            source={{
                                uri: "https://gurmeet.net/Images/puzzles/number_guessing_game_transparent.png",
                            }}
                            style={styles.image}
                        />
                        <Card style={styles.inputContainer}>
                            <BodyText>Select a number</BodyText>
                            <Input
                                style={styles.input}
                                keyboardType="number-pad"
                                blurOnSubmit
                                autoCapitalize="none"
                                autoCorrect={false}
                                maxLength={3}
                                onChangeText={numberInputHandler}
                                value={enteredValue}
                            />
                            <View style={styles.buttonContainer}>
                                <MainButton
                                    onPress={resetInputHandler}
                                    style={{
                                        width: (2 * AppDimensions.width) / 7,
                                        backgroundColor: Colors.tertiary,
                                    }}
                                >
                                    RESET
                                </MainButton>

                                <MainButton
                                    onPress={confirmInputHandler}
                                    style={{
                                        width:
                                            (2 *
                                                Dimensions.get("window")
                                                    .width) /
                                            7,
                                    }}
                                >
                                    CONFIRM
                                </MainButton>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        marginVertical: 10,
        fontFamily: "open-sans-italic",
    },

    inputContainer: {
        minWidth: 300,
        width: "80%",
        maxWidth: "95%",
        alignItems: "center",
        marginBottom: 10,
    },
    summaryContainer: {
        maxWidth: "80%",
        alignItems: "center",
        marginBottom: 10,
    },

    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 15,
        marginTop: 15,
    },
    input: {
        width: 50,
        textAlign: "center",
    },
    image: {
        width: 220,
        height: 220,
        resizeMode: "cover",
        marginBottom: 10,
    },
});

export default StartGameScreen;
