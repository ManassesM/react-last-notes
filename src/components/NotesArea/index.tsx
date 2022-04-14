import { ReactChild } from 'react'
import { useNoteForm } from '../../context/NoteForm'
import NoteForm from '../NoteForm'
import * as S from './styles'

interface Props {
	children: ReactChild
}

const NotesArea = ({ children }: Props) => {
	const { showForm } = useNoteForm()

	return (
		<S.Article>
			{children}
			{showForm && <NoteForm />}
		</S.Article>
	)
}

export default NotesArea
