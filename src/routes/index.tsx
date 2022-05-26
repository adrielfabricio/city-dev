import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../components/Header';
import Cities from '../screens/Cities';
import Places from '../screens/Places';
import CreateCity from '../screens/CreateCity';
import CreatePlace from '../screens/CreatePlace';
import UpdatePlace from '../screens/UpdatePlace';

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
				<Stack.Screen
					name="Places"
					component={Places}
					options={{ headerTitle: 'Locais' }}
				/>
				<Stack.Screen
					name="CreatePlace"
					component={CreatePlace}
					options={{ headerTitle: 'Criar Local' }}
				/>
				<Stack.Screen
					name="UpdatePlace"
					component={UpdatePlace}
					options={{ headerTitle: 'Atualizar Local' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
