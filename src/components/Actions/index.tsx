import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'

import { useHighlight } from '../../context/HighlightContext'
import { useNoteForm } from '../../context/NoteForm'
import { useNoteList } from '../../context/NoteListContext'

import * as S from './styles'

const Actions = () => {
	const { setShowForm, setTitle, setDescription } = useNoteForm()

	const { noteList, setNoteList } = useNoteList()
	const { isHighlighted, setIsHighlighted } = useHighlight()

	function clearForm() {
		setTitle('')
		setDescription('')
		setIsHighlighted('')
	}

	function handleCreate() {
		setShowForm(true)
		clearForm()
	}

	function handleEdit() {
		setShowForm(true)
		const note = noteList.find((note) => note.id === isHighlighted)

		setTitle(note?.title || '')
		setDescription(note?.description || '')
	}

	function handleDelete() {
		if (isHighlighted) {
			clearForm()

			const noteIdx = noteList.findIndex((note) => note.id === isHighlighted)
			noteList.splice(noteIdx, 1)

			setNoteList([...noteList])
		}
	}

	return (
		<S.Actions>
			<S.ActionButton>
				<FaPlus onClick={handleCreate} />
			</S.ActionButton>
			<S.ActionButton disabled={!!!isHighlighted}>
				<FaPencilAlt onClick={handleEdit} />
			</S.ActionButton>
			<S.ActionButton disabled={!!!isHighlighted}>
				<FaTrash onClick={handleDelete} />
			</S.ActionButton>
		</S.Actions>
	)
}

export default Actions
