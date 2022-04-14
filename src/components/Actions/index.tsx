import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'

import { useNoteForm } from '../../context/NoteForm'

import * as S from './styles'

const Actions = () => {
	const { showForm, setShowForm } = useNoteForm()

	return (
		<S.Actions>
			<S.ActionButton disabled={showForm}>
				<FaPlus onClick={() => setShowForm(true)} />
			</S.ActionButton>
			<S.ActionButton disabled>
				<FaPencilAlt />
			</S.ActionButton>
			<S.ActionButton disabled>
				<FaTrash />
			</S.ActionButton>
		</S.Actions>
	)
}

export default Actions
