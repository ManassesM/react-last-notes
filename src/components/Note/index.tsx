import { useState } from 'react'
import { useNoteForm } from '../../context/NoteForm'

import * as S from './styles'

interface NoteProps {
	id: string
	title: string
	description: string
}

const Note = ({ id, title, description }: NoteProps) => {
	const [highlight, setHighlight] = useState(false)
	const { setShowForm } = useNoteForm()

	return (
		<S.Note
			id={id}
			highlight={highlight}
			onClick={() => {
				setHighlight(!highlight)
				setShowForm(true)
			}}
		>
			<h2>{title}</h2>
			<hr />
			<S.Description>{description}</S.Description>
		</S.Note>
	)
}

export default Note
