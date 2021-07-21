import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Card style={styles.card}>
				<Text> The Game is Over!</Text>
				<Text>Number of Rounds: {props.guessRounds}</Text>
				<Text>Number was: {props.userChoice}</Text>
			</Card>

			<View style={{ width: "45%" }}>
				<Button
					title="PLAY AGAIN"
					onPress={props.onRestart}
					color={Colors.primary}
				/>
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
});

export default GameOverScreen;
