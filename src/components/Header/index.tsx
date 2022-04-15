import { ReactNode } from 'react'

import * as S from './styles'

interface Props {
	children: ReactNode
}

const Header = ({ children }: Props) => {
	return <S.Header>{children}</S.Header>
}

export default Header
