import React from 'react';
import { Button, FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../../constants/color';
import { RootState } from '../../store/rootReducer';
import Row from './Row';
import { IRowProps } from './Row/interfaces';
import { ButtonContainer, Container, dividerStyle, flatList } from './styles';

interface Props {
	route: any;
	navigation: any;
}

const Places: React.FC<Props> = ({ route, navigation }) => {
	const { _id } = route.params;
	const places = useSelector((state: RootState) =>
		Object.values(state.place).filter(place => {
			return place.city_id === _id;
		}),
	);

	function handleCreateCityButtonPress() {
		navigation.navigate('CreatePlace', {
			_id,
		});
	}

	function renderFooter() {
		return (
			<ButtonContainer>
				<Button
					title="Adicionar Local"
					color={colors.secondary}
					onPress={handleCreateCityButtonPress}
				/>
			</ButtonContainer>
		);
	}

	function renderItemSeparatorComponent() {
		return <View style={dividerStyle} />;
	}

	function renderItem({ item }: IRowProps) {
		return (
			<Row
				key={item.name}
				item={item}
				handlePress={() =>
					navigation.navigate('Places', {
						_id: item._id,
					})
				}
			/>
		);
	}

	return (
		<Container>
			{places && (
				<FlatList
					style={flatList.style}
					contentContainerStyle={flatList.containerStyle}
					data={places}
					renderItem={renderItem}
					keyExtractor={(item: any) => item._id}
					ItemSeparatorComponent={renderItemSeparatorComponent}
					ListFooterComponent={renderFooter}
					showsVerticalScrollIndicator={false}
				/>
			)}
		</Container>
	);
};

export default Places;
