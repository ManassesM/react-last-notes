import styled from 'styled-components'

export const Article = styled.article`
	display: flex;
	justify-content: space-between;

	@media (max-width: 728px) {
		flex-wrap: wrap-reverse;
	}
`
