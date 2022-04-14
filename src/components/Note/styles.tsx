import styled from 'styled-components'

export const Note = styled.div<{ highlight: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 280px;
	height: 280px;

	padding: 15px;
	border: ${({ highlight }) => highlight && '2px solid var(--dark-gray)'};

	background: var(--note-background);
	border-radius: 10px;
	transition: all 0.2s;

	&:hover {
		transform: scale(1.025);
	}

	hr {
		align-self: center;
		width: 80%;
		border-bottom: none;
		margin: 10px;
	}

	h2 {
		text-align: center;

		font-weight: 700;
		width: 100%;

		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;

		padding-bottom: 5px;

		&::-webkit-scrollbar {
			display: none;
		}

		@media (max-width: 720px) {
			margin: 20px 0 0 20px;
		}
	}
`

export const Description = styled.p`
	width: 100%;
	height: 100%;

	overflow-x: hidden;
	overflow-y: scroll;

	text-overflow: ellipsis;

	/* scrollbar */
	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background: transparent;
	}

	&:hover::-webkit-scrollbar-thumb {
		background: #888888;
	}
`
