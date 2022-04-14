import { ReactChild } from 'react'
import NoteForm from '../NoteForm'
import * as S from './styles'

interface Props {
	children: ReactChild
}

const NotesArea = ({ children }: Props) => {
	return (
		<S.Article>
			{children}
			<NoteForm />
		</S.Article>
	)
}

export default NotesArea
