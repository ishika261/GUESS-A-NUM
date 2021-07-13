import React from "react";
import { StyleSheet, TextInput } from "react-native";

import Colors from "../constants/Colors";

const Input = (props) => {
	return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomWidth: 2,
		borderBottomColor: Colors.primary,
		marginVertical: 1,
	},
});
export default Input;
