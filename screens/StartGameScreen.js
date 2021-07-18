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
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/Colors";
import NumberContainer from "../components/NumberContainer";

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

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "INVALID NUMBER!",
                "Number has to be a number between 1 and 99",
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
                <Text>Chosen Number:</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button
                    title="START THE GAME"
                    color={Colors.tertiary}
                    onPress={() => props.onStartGame(selectedNumber)}
                />
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input
                        style={styles.input}
                        keyboardType="number-pad"
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={{ width: "45%" }}>
                            <Button
                                title="Reset"
                                onPress={resetInputHandler}
                                color={Colors.tertiary}
                            />
                        </View>
                        <View style={{ width: "45%" }}>
                            <Button
                                title="CONFIRM"
                                onPress={confirmInputHandler}
                                color={Colors.primary}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },

    inputContainer: {
        width: 300,
        maxWidth: "80%",
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
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 15,
    },
    input: {
        width: 50,
        textAlign: "center",
    },
});

export default StartGameScreen;
