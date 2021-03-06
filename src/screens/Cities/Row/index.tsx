import React from 'react';
import Arrow from '../../../assets/arrow.svg';
import { IRowProps } from './interfaces';
import { Container, Name } from './styles';

const Row: React.FC<IRowProps> = ({ item, handlePress }) => {
	return (
		<Container onPress={handlePress}>
			<Name>{`${item.name}`}</Name>
			<Arrow />
		</Container>
	);
};

export default Row;
