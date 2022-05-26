import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import colors from '../../constants/color';
import { deletePlace, updatePlace } from '../../store/place/actions';
import { RootState } from '../../store/rootReducer';
import { ButtonContainer, Container } from './styles';

interface Props {
	route: any;
	navigation: any;
}

const UpdatePlace: React.FC<Props> = ({ route, navigation }) => {
	const { place_id } = route.params;
	const place: any = useSelector(
		(state: RootState) =>
			Object.values(state.place).filter(p => {
				return p._id === place_id;
			})[0],
	);

	const dispatch = useDispatch();
	const [name, setName] = useState<string>(place.name);
	const [type, setType] = useState<string>(place.type);
	const [address, setAddress] = useState<string>(place.address);
	const [notes, setNotes] = useState<string>(place.notes);

	function handleUpdatePlace() {
		dispatch(
			updatePlace({
				_id: place_id,
				name,
				type,
				address,
				notes,
				city_id: place.city_id,
			}),
		);
		navigation.goBack();
	}

	function handleDeletePlace() {
		dispatch(deletePlace({ _id: place_id }));
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
				<Button
					title="Salvar"
					color={colors.secondary}
					onPress={handleUpdatePlace}
				/>
			</ButtonContainer>
			<ButtonContainer>
				<Button title="Deletar" color={colors.delete} onPress={handleDeletePlace} />
			</ButtonContainer>
		</Container>
	);
};

export default UpdatePlace;
