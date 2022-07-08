import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

function Welcome(props) {
	return (
		<ImageBackground style={styles.background} source={{ uri: 'https://picsum.photos/360/768' }}>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={{ uri: 'https://picsum.photos/250/250' }} />
				<Text>Logo</Text>
			</View>
			<View style={styles.loginButton}>
				<Text>Login</Text>
			</View>
			<View style={styles.registerButton}>
				<Text>Register</Text>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	loginButton: {
		width: '100%',
		height: 70,
		backgroundColor: 'tomato'
	},
	registerButton: {
		width: '100%',
		height: 70,
		backgroundColor: 'dodgerblue'
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: 'absolute',
		top: 70,
		alignItems: 'center'
	}
})

export default Welcome;