import { useEffect } from 'react'

import { useNoteList } from '../../context/NoteListContext'

import Note from '../Note'

import * as S from './styles'

const Notes = () => {
	const { noteList, setNoteList } = useNoteList()

	const getLocalNotes = () => {
		let localNotes = localStorage.getItem('notes')

		localNotes === null
			? localStorage.setItem('notes', JSON.stringify([]))
			: setNoteList(JSON.parse(localNotes))
	}

	useEffect(() => getLocalNotes(), [])

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
