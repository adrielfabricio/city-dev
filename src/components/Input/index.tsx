import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { View, TextInputProps, ViewStyle } from 'react-native';
import colors from '../../constants/color';
import { Container, TextInput, Label, AdditionalInfoText } from './styles';

interface InputProps extends TextInputProps {
	name: string;
	label?: string;
	containerStyle?: ViewStyle;
	helperText?: string;
}

interface InputRef {
	focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
	{ name, label, containerStyle, helperText, ...rest },
	ref,
) => {
	const inputElementRef = useRef<any>(null);

	useImperativeHandle(ref, () => ({
		focus() {
			inputElementRef.current.focus();
		},
	}));

	return (
		<View style={{ marginBottom: 15 }}>
			{label ? <Label>{label}</Label> : null}
			<Container style={{ ...containerStyle }}>
				<TextInput
					ref={inputElementRef}
					name={name}
					keyboardAppearence="dark"
					placeholderTextColor={colors.gray}
					{...rest}
				/>
			</Container>
			{helperText && <AdditionalInfoText>{helperText}</AdditionalInfoText>}
		</View>
	);
};

export default forwardRef(Input);
