import { useState } from 'react'
import { useHighlight } from '../../context/HighlightContext'

import * as S from './styles'

interface NoteProps {
	id: string
	title: string
	description: string
}

const Note = ({ id, title, description }: NoteProps) => {
	const [highlight, setHighlight] = useState(false)
	const { isHighlighted, setIsHighlighted } = useHighlight()

	return (
		<S.Note
			id={id}
			isHighlighted={isHighlighted}
			onClick={() => {
				setHighlight(!highlight)
				setIsHighlighted(id)
			}}
		>
			<h2>{title}</h2>
			<hr />
			<S.Description>{description}</S.Description>
		</S.Note>
	)
}

export default Note
