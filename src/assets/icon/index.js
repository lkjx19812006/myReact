import base from './modules/base';
import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Image
} from 'react-native';

const config = {
	...base
}

export default class Icon extends Component {
	constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.activated === nextProps.activated) {
			return false;
		} else {
			return true;
		}
	}

	render() {
		let iconUrl = '';
		if (this.props.activated) {
			iconUrl = config[this.props.icon] && config[this.props.icon].active || '';
		} else {
			iconUrl = config[this.props.icon] && config[this.props.icon].default || '';
		}
		return (
			<View
				style={[styles.container, this.props.wrapStyle]}
				ref={component => this._root = component}
				{...this.props}
			>
				<Image
					source={{ uri: iconUrl }}
					style={this.props.iconStyle || styles.icon}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		height: 36,
		width: 36,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		height: 26,
		width: 26,
		padding: 2
	}
})