import React, { useState } from 'react';
import { Button } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import colors from '../../constants/color';
import { setPlace } from '../../store/place/actions';
import { RootState } from '../../store/rootReducer';
import { ButtonContainer, Container } from './styles';

interface Props {
	route: any;
	navigation: any;
}

const CreatePlace: React.FC<Props> = ({ route, navigation }) => {
	const { _id } = route.params;
	const dispatch = useDispatch();
	const [name, setName] = useState<string>('');
	const [type, setType] = useState<string>('');
	const [address, setAddress] = useState<string>('');
	const [notes, setNotes] = useState<string>('');

	const places = useSelector((state: RootState) =>
		Object.values(state.place).filter(place => {
			return place.city_id === _id;
		}),
	);

	function handleSetPlace() {
		const place = {
			_id: Math.random().toString(36).substring(7),
			name,
			type,
			address,
			notes,
			city_id: _id,
		};
		dispatch(setPlace(places, { ...place }));
		navigation.goBack();
	}

	return (
		<Container>
			<Input
				name="name"
				label="Nome do Local"
				value={name}
				onChangeText={value => setName(value)}
			/>
			<Input
				name="type"
				label="Tipo"
				value={type}
				onChangeText={value => setType(value)}
			/>
			<Input
				name="address"
				label="Endereço"
				value={address}
				onChangeText={value => setAddress(value)}
			/>
			<Input
				name="notes"
				label="Notas Adicionais"
				value={notes}
				onChangeText={value => setNotes(value)}
			/>

			<ButtonContainer>
				<Button title="Salvar" color={colors.secondary} onPress={handleSetPlace} />
			</ButtonContainer>
		</Container>
	);
};

export default CreatePlace;
