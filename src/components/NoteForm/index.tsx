import { useNoteForm } from '../../context/NoteForm'
import { useNoteList } from '../../context/NoteListContext'

import * as S from './styles'

const NoteForm = () => {
	const { noteList, setNoteList } = useNoteList()
	const { title, setTitle, description, setDescription, setShowForm } =
		useNoteForm()

	const inputTitleHandler = (e: any) => setTitle(e.target.value)
	const inputDescriptionHandler = (e: any) => setDescription(e.target.value)

	function clearForm() {
		setTitle('')
		setDescription('')
	}

	function handleSubmit(e: any) {
		e.preventDefault()

		setNoteList([
			...noteList,
			{
				id: String(Math.floor(Math.random() * 1000)),
				title,
				description,
			},
		])

		clearForm()
	}

	return (
		<S.Form>
			<S.Container>
				<S.Label htmlFor='title'>Title</S.Label>
				<S.Input
					id='title'
					value={title}
					onChange={inputTitleHandler}
					type='text'
					placeholder='Provide a title'
				/>
			</S.Container>
			<S.Container>
				<S.Label htmlFor='note'>Description</S.Label>
				<S.TextArea
					id=''
					value={description}
					onChange={inputDescriptionHandler}
					rows={10}
					placeholder='Type your note'
				/>
			</S.Container>
			<S.Buttons>
				<S.BtnCancel onClick={() => setShowForm(false)} />
				<S.BtnSubmit type='submit' onClick={handleSubmit} />
			</S.Buttons>
		</S.Form>
	)
}

export default NoteForm
