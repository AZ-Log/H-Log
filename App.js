/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
SafeAreaView,
StyleSheet,
Text
} from 'react-native';

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={{color:'lightgray',fontSize:20}}>Hello H-Log:)</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6a92d4',
		alignItems: 'center',
		justifyContent: 'center',
	}
});

export default App;