/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/home';
import UserScreen from './src/user';
// import DrawerHomeScreen from './src/home_drawer';
// import DrawerUserScreen from './src/user_drawer';
import 'react-native-gesture-handler';
import LogoTitle from './src/logo';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';
import TabMessageScreen from './src/message_tab';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconImagePath;

  if (name === 'Home') {
    iconImagePath = require('./src/assets/pics/shiba.png');
  } else if (name === 'User') {
    iconImagePath = require('./src/assets/pics/cat.png');
  } else if (name === 'Message') {
    iconImagePath = require('./src/assets/pics/rabbit.png');
  }

  return (
    <Image
      style={{
        width: focused ? 30 : 20,
        height: focused ? 30 : 20,
      }}
      source={iconImagePath}
    />
  );
};

class App extends Component {
  // logoTitle = () => {
  //   return (
  //     <Image
  //       style={{width: 40, height: 40}}
  //       source={require('./src/assets/pics/shiba.png')}
  //     />
  //   );
  // };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeBackgroundColor: 'skyblue',
            activeTintColor: 'blue',
            inactiveTintColor: '#fff',
            style: {
              backgroundColor: '#c6cbef',
            },
            labelPosition: 'beside-icon',
          }}
          screenOptions={({route}) => ({
            tabBarLabel: route.name,
            tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
          })}>
          <Tab.Screen name="Home" component={TabHomeScreen} />
          <Tab.Screen name="User" component={TabUserScreen} />
          <Tab.Screen name="Message" component={TabMessageScreen} />
        </Tab.Navigator>
        {/* <Text>Hello</Text> */}
        {/* <Drawer.Navigator>
          <Drawer.Screen name="Home" component={DrawerHomeScreen} />
          <Drawer.Screen name="User" component={DrawerUserScreen} />
        </Drawer.Navigator> */}
      </NavigationContainer>
      // <NavigationContainer>
      //   <Stack.Navigator
      //     initialRouteName="User"
      //     screenOptions={{
      //       headerStyle: {
      //         backgroundColor: '#a4511e',
      //       },
      //       headerTintColor: '#fff',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         color: '#123456',
      //       },
      //     }}>
      //     <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{
      //         title: 'Home Screen',
      //         headerTitle: <LogoTitle />,
      //         headerRight: () => (
      //           <Button
      //             title="Info"
      //             onPress={() => alert('I am a button!!')}
      //             color="orange"
      //           />
      //         ),
      //       }}
      //     />
      //     <Stack.Screen
      //       name="User"
      //       component={UserScreen}
      //       initialParams={{
      //         userIdx: 50,
      //         userName: 'Yeasul',
      //         useerLastName: 'Lee',
      //       }}
      //       // options={{
      //       //   title: 'User Screen',
      //       //   headerStyle: {
      //       //     backgroundColor: 'pink',
      //       //   },
      //       //   headerTintColor: 'red',
      //       //   headerTitleStyle: {
      //       //     fontWeight: 'bold',
      //       //     color: 'purple',
      //       //   },
      //       // }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
