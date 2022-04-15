import { useEffect, useState } from 'react'
import { useHighlight } from '../../context/HighlightContext'
import { useNoteForm } from '../../context/NoteForm'
import { useNoteList } from '../../context/NoteListContext'
import { NoteProps } from '../../types/Note'

import * as S from './styles'

const Note = ({ id, title, description }: NoteProps) => {
	const [highlight, setHighlight] = useState(false)

	const { isHighlighted, setIsHighlighted } = useHighlight()
	const { setTitle, setDescription } = useNoteForm()
	const { noteList } = useNoteList()

	function clearForm() {
		setTitle('')
		setDescription('')
	}

	function onClickNote() {
		setHighlight(!highlight)
		setIsHighlighted(id)
	}

	useEffect(() => {
		if (!isHighlighted) clearForm()

		const note = noteList.find((note) => note.id === isHighlighted)

		setTitle(note?.title || '')
		setDescription(note?.description || '')
	}, [isHighlighted])

	return (
		<S.Note id={id} isHighlighted={isHighlighted} onClick={onClickNote}>
			<h2>{title}</h2>
			<hr />
			<S.Description>{description}</S.Description>
		</S.Note>
	)
}

export default Note
