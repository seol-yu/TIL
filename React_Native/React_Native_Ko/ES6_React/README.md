`react-native init --version 0.61.5 react_01`

`cd react_01`

`npm start`

터미널 추가 후

`react-native run-android`

<br />

App.js를

```javascript
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={styles.background}>
            	<Text> Hello World </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default App;
```



