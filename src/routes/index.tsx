import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from '../screens/Cities';
import CreateCity from '../screens/CreateCity';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					header: props => <Header props={props} />,
				}}>
				<Stack.Screen
					name="Cities"
					component={Cities}
					options={{ headerTitle: 'Cidades' }}
				/>
				<Stack.Screen
					name="CreateCity"
					component={CreateCity}
					options={{ headerTitle: 'Criar Cidade' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
