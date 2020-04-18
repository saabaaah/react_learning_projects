// testing --> Dev spécifique // 

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

// importer du code spécifique //
import HelloWorld from './HelloWorld'
class Test extends React.Component {


	// retourner le design //
	render() {
		return (
			<View style={styles.main_container} >
				<View style={styles.subview_container} >
					{
						Platform.OS == 'ios'? <Text> iOS </Text> : <Text>Android</Text>
					}
					<HelloWorld/>
				</View>
			</View>
		);
	}
}

// créer un style pour ce composant //
const styles = StyleSheet.create({
	main_container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	subview_container: {
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export default Test