import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, StyleSheet } from 'react-native';
import { themes } from '../constants/colors';

interface IActivityIndicator extends ActivityIndicatorProps{
	theme?: 'light' | 'dark' | 'black' | string,
	absolute?: boolean,
	props?: object
}

const styles = StyleSheet.create({
	indicator: {
		padding: 16,
		flex: 1
	},
	absolute: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const RCActivityIndicator = ({ theme = 'light', absolute, ...props }: IActivityIndicator) => (
	<ActivityIndicator
		style={[styles.indicator, absolute && styles.absolute]}
		color={themes[theme].auxiliaryText}
		{...props}
	/>
);

export default RCActivityIndicator;
