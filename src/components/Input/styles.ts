import styled from 'styled-components/native';
import colors from '../../constants/color';

export const Container = styled.View({
	width: '100%',
	height: 60,
	paddingHorizontal: 16,
	background: colors.white,
	borderWidth: 1,
	borderColor: colors.whiteSecondary,
	borderRadius: 10,
	marginBottom: 5,
	flexDirection: 'row',
	alignItems: 'center',
	elevantion: 5,
});

export const Label = styled.Text({
	color: colors.primary,
	paddingVertical: 5,
	fontWeight: 'bold',
});

export const TextInput = styled.TextInput({
	flex: 1,
	height: 60,
	color: colors.primary,
	fontSize: 15,
});

export const AdditionalInfoText = styled.Text({
	fontSize: 12,
	color: colors.gray,
});
