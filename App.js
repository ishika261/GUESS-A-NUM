import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo-app-loading";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GeneralStatusBarColor from "./components/GeneralSatusBarColor";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFonts = () => {
	return Font.loadAsync({
		"cursive-write": require("./assets/fonts/Precious.ttf"),
		"open-sans-bold": require("./assets/fonts/Open_Sans/OpenSans-Bold.ttf"),
		"open-sans-italic": require("./assets/fonts/Open_Sans/OpenSans-Italic.ttf"),
	});
};

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [guessRounds, setGuessRounds] = useState(0);
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	const configureNewGamehandler = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
		setGuessRounds(0);
	};

	const gameOverHandler = (numofRounds) => {
		setGuessRounds(numofRounds);
	};

	let content = <StartGameScreen onStartGame={startGameHandler} />;
	if (userNumber && guessRounds <= 0) {
		content = (
			<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
		);
	} else if (guessRounds > 0) {
		content = (
			<GameOverScreen
				guessRounds={guessRounds}
				userChoice={userNumber}
				onRestart={configureNewGamehandler}
			/>
		);
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
