import React, { useState } from 'react';
import { Button } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import colors from '../../constants/color';
import { setCity } from '../../store/city/actions';
import { RootState } from '../../store/rootReducer';
import { ButtonContainer, Container } from './styles';

interface Props {
	navigation: any;
}

const CreateCity: React.FC<Props> = ({ navigation }) => {
	const dispatch = useDispatch();
	const cities = useSelector((state: RootState) =>
		Object.values(state.city).filter(city => {
			return Object.keys(city).length > 2;
		}),
	);

	const [name, setName] = useState<string>('');
	const [country, setCountry] = useState<string>('');

	function handleSetCity() {
		const city = {
			_id: Math.random().toString(36).substring(7),
			name,
			country_name: country,
		};
		dispatch(setCity(cities, { ...city }));
		navigation.goBack();
	}

	return (
		<Container>
			<Input
				name="name"
				label="Cidade"
				value={name}
				onChangeText={value => setName(value)}
			/>
			<Input
				name="country"
				label="País"
				value={country}
				onChangeText={value => setCountry(value)}
			/>

			<ButtonContainer>
				<Button title="Salvar" color={colors.secondary} onPress={handleSetCity} />
			</ButtonContainer>
		</Container>
	);
};

export default CreateCity;
