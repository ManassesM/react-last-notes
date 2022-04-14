import styled from 'styled-components'

export const Section = styled.section`
	margin: 20px 0 0 20px;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	justify-content: space-evenly;

  @media(max-width: 720px) {
    justify-content: center;
    margin: 0;
  }
`
