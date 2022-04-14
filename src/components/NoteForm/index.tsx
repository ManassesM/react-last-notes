import * as S from './styles'

const NoteForm = () => {
	return (
		<S.Form>
			<S.Container>
				<S.Label htmlFor='title'>Title</S.Label>
				<S.Input id='title' type='text' placeholder='Provide a title' />
			</S.Container>
			<S.Container>
				<S.Label htmlFor='note'>Description</S.Label>
				<S.TextArea id='' rows={10} placeholder='Type your note' />
			</S.Container>
			<S.Buttons>
				<S.BtnCancel />
				<S.BtnSubmit type='submit' />
			</S.Buttons>
		</S.Form>
	)
}

export default NoteForm
