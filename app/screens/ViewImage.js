import React from 'react';
import { Image, StyleSheet } from 'react-native';

function ViewImage(props) {
	return (
		<Image resizeMode='contain' style={styles.image} source={{ uri: 'https://picsum.photos/368/760' }} />
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '100%'
	},
})

export default ViewImage;