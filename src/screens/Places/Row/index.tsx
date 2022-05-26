import React from 'react';
import Arrow from '../../../assets/arrow.svg';
import { IRowProps } from './interfaces';
import { Container, AddressName } from './styles';

const Row: React.FC<IRowProps> = ({ item, handlePress }) => {
	return (
		<Container onPress={handlePress}>
			<AddressName>{`${item.name}`}</AddressName>
			<Arrow />
		</Container>
	);
};

export default Row;
