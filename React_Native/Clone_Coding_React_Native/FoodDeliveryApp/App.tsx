import * as React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Pressable, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import {useCallback} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <>
      <View style={{flex: 2, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'flex-end'}}>
        <TouchableHighlight underlayColor="orange" onPress={onClick}>
          <Text>Home Screen</Text>
        </TouchableHighlight>
        <Pressable onPress={onClick} style={{paddingVertical: 20, paddingHorizontal:40, backgroundColor: 'blue'}}>
          <Text style={{color: 'white'}}>Hello</Text>
        </Pressable>
      </View>
      <View style={{flex: 5, backgroundColor: 'pink'}}><Text>Second</Text></View>
    </>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight onPress={onClick}>
        <Text>Details Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈화면', headerShown: false}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
