import { useNoteList } from '../../context/NoteListContext'

import Note from '../Note'

import * as S from './styles'

const Notes = () => {
	const { noteList, setNoteList } = useNoteList()

	return (
		<S.Section>
			{noteList?.map((note) => (
				<Note
					key={note.id}
					id={note.id}
					title={note.title}
					description={note.description}
				/>
			))}
		</S.Section>
	)
}

export default Notes
