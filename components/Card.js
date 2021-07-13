import React from "react";
import { StyleSheet, View } from "react-native";

import Colors from "../constants/Colors";

const Card = (props) => {
	return (
		<View style={{ ...styles.card, ...props.style }}>{props.children}</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: Colors.secondary,
		padding: 15,
		borderWidth: 1,
		borderColor: Colors.primary,
		borderRadius: 10,
	},
});

export default Card;
