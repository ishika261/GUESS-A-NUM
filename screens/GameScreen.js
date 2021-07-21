import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
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
	const { userChoice, onGameOver } = props;

	const currentLow = useRef(1);
	const currentHigh = useRef(100);
	const noOfMoves = useRef(1);

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(noOfMoves.current);
		}
	}, [noOfMoves.current, userChoice, onGameOver]);

	const nextGuessHandler = (direction) => {
		console.log(direction);
		console.log(currentGuess);
		console.log(props.userChoice);
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
	};

	return (
		<View style={styles.screen}>
			<Card style={styles.GuessContainer}>
				<Text>Computer's Guess: </Text>
				<NumberContainer>{currentGuess}</NumberContainer>
				<View style={styles.buttonContainer}>
					<View style={{ width: "45%" }}>
						<Button
							title="LESSER"
							onPress={nextGuessHandler.bind(this, "lower")}
							color={Colors.tertiary}
						/>
					</View>
					<View style={{ width: "45%" }}>
						<Button
							title="GREATER"
							onPress={nextGuessHandler.bind(this, "greater")}
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
});

export default GameScreen;
