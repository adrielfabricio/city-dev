import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import { persistor, store } from './store';
import { safeAreaViewStyles } from './styles';

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SafeAreaView style={safeAreaViewStyles.header} />
				<SafeAreaView style={safeAreaViewStyles.container}>
					<StatusBar barStyle="light-content" backgroundColor="#144FA2" />
					<Routes />
				</SafeAreaView>
			</PersistGate>
		</Provider>
	);
};

export default App;
