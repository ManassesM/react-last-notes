import { useEffect } from 'react'

import { v4 as uuid } from 'uuid'

import { useHighlight } from '../../context/HighlightContext'
import { useNoteForm } from '../../context/NoteForm'
import { useNoteList } from '../../context/NoteListContext'

import * as S from './styles'

const NoteForm = () => {
	const { noteList, setNoteList } = useNoteList()
	const { isHighlighted, setIsHighlighted } = useHighlight()
	const { title, setTitle, description, setDescription, setShowForm } =
		useNoteForm()

	const handleCancel = () => {
		setShowForm(false)
		setIsHighlighted('')
	}

	const saveLocalStorage = () =>
		localStorage.setItem('notes', JSON.stringify(noteList))

	function clearForm() {
		setTitle('')
		setDescription('')
	}

	useEffect(() => saveLocalStorage(), [noteList])

	function handleSubmit(e: any) {
		e.preventDefault()

		if (isHighlighted) {
			noteList.map((note) => {
				if (note.id === isHighlighted) {
					note.title = title
					note.description = description
				}
			})

			setNoteList([...noteList])
		} else {
			setNoteList([
				...noteList,
				{
					id: uuid(),
					title,
					description,
				},
			])
			clearForm()
		}
	}

	return (
		<S.Form>
			<S.Container>
				<S.Label htmlFor='title'>Title</S.Label>
				<S.Input
					id={uuid()}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type='text'
					placeholder='Provide a title'
				/>
			</S.Container>
			<S.Container>
				<S.Label htmlFor='note'>Description</S.Label>
				<S.TextArea
					id={uuid()}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					rows={10}
					placeholder='Type your note'
				/>
			</S.Container>
			<S.Buttons>
				<S.BtnCancel onClick={handleCancel} />
				<S.BtnSubmit type='submit' onClick={handleSubmit} />
			</S.Buttons>
		</S.Form>
	)
}

export default NoteForm
