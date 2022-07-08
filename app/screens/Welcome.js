import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function Welcome(props) {
	return (
		<ImageBackground style={styles.background} source={{ uri: 'https://picsum.photos/360/768' }}>

		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1
	}
})

export default Welcome;