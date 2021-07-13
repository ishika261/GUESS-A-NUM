import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

const GeneralStatusBarColor = ({ backgroundColor, ...props }) => {
	return (
		<View style={[styles.statusBar, { backgroundColor }]}>
			<StatusBar
				translucent
				backgroundColor={backgroundColor}
				{...props}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	statusBar: {
		height: StatusBar.height,
	},
});

export default GeneralStatusBarColor;
