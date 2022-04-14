import { FaBan, FaCheck } from 'react-icons/fa'
import styled from 'styled-components'

// BUTTONS

export const BtnCancel = styled(FaBan)``

export const BtnSubmit = styled(FaCheck)``

// FORM
export const TextArea = styled.textarea`
	resize: none;

	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-track,
	&::-webkit-scrollbar-thumb {
		background: transparent;
	}

	&:hover::-webkit-scrollbar-thumb {
		background: #888888;
	}
`

export const Input = styled.input`
	border: 0;
	height: 40px;

	margin-bottom: 20px;
`

export const Label = styled.label`
	font-weight: 300;
	font-size: 24px;

	color: #ffffff;
	margin-bottom: 8px;
`

// WRAPPERS
export const Buttons = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: flex-end;
	gap: 10px;

	svg {
		width: 25px;
		height: 25px;

		cursor: pointer;

		color: #ffffff;
	}
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	textarea,
	input {
		background: var(--note-background);
		font-size: 16px;
		padding: 5px;

		&:focus {
			outline: none;
		}
	}
`

export const Form = styled.form`
	width: 400px;
	min-width: 400px;
	min-height: 95vh;

	padding: 20px;
	background: var(--dark-gray);

  @media(max-width: 720px) {
    flex: 1;
    min-height:340px;
  }
`
