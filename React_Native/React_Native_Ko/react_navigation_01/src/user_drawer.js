/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class DrawerUserScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home Screen</Text>
        <Button
          title="To User Screen"
          onPress={() => {
            this.props.navigation.navigate('User', {
              userIdx: 100,
              userName: 'Seolyu',
              userLastName: 'Lee',
            });
          }}
        />
      </View>
    );
  }
}

export default DrawerUserScreen;
