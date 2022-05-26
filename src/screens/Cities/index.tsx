import React from 'react';
import { Button, FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../../constants/color';
import { RootState } from '../../store/rootReducer';
import Row from './Row';
import { IRowProps } from './Row/interfaces';
import { ButtonContainer, Container, dividerStyle, flatList } from './styles';

interface Props {
	navigation: any;
}

const Cities: React.FC<Props> = ({ navigation }) => {
	const cities = useSelector((state: RootState) =>
		Object.values(state.city).filter(city => {
			return Object.keys(city).length > 2;
		}),
	);

	function handleCreateCityButtonPress() {
		navigation.navigate('CreateCity');
	}

	function renderFooter() {
		return (
			<ButtonContainer>
				<Button
					title="Adicionar Cidade"
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
			{cities && (
				<FlatList
					style={flatList.style}
					contentContainerStyle={flatList.containerStyle}
					data={cities}
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

export default Cities;
