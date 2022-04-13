import styled from 'styled-components'

export const Actions = styled.div`
	display: flex;
	gap: 13px;
`

export const ActionButton = styled.button<{ disabled?: boolean }>`
	display: flex;

	background: none;
	border: none;

	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	opacity: ${({ disabled }) => disabled && '0.5'};

	svg {
		width: 25px;
		height: 25px;

		color: #ffffff;
	}
`
