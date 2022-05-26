import React from 'react';
import Arrow from '../../../assets/arrow.svg';
import { IRowProps } from './interfaces';
import { Container, PokemonName } from './styles';

const Row: React.FC<IRowProps> = ({ item, handlePress }) => {
	return (
		<Container onPress={handlePress}>
			<PokemonName>{`${item.name}`}</PokemonName>
			<Arrow />
		</Container>
	);
};

export default Row;
