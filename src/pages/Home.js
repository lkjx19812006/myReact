import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Animated
} from 'react-native'

import Icon from '../assets/icon'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editActive: false,
      fadeAnim: new Animated.Value(0), //设置初始值
    }
    this.iconActive = false;
  }

  _onPressButton() {
    this.iconActive = !this.iconActive
  }

  render() {
    return (
      <View style={[styles.container]}>
        {/* 隐藏状态栏 */}
        <StatusBar
          hidden
          barStyle='dark-content'
        />

        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.btnMenu]}
          onPress={this._onPressButton.bind(this)}>
          <Icon
            icon="chat"
            activated={this.iconActive}
          />
        </TouchableOpacity >
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#f0f0f0'
  },
  btnMenu: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    height: 60,
    width: 60,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    //注意：这一句是可以让安卓拥有灰色阴影 
    elevation: 6
  }
})