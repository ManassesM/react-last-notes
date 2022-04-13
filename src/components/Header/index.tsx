import { ReactChild } from 'react'

import * as S from './styles'

interface Props {
	children: ReactChild[]
}

const Header = (props: Props) => {
	return <S.Header>{props.children}</S.Header>
}

export default Header
