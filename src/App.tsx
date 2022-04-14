import Header from './components/Header'
import Logo from './components/Logo'
import Actions from './components/Actions'
import NotesArea from './components/NotesArea'
import Notes from './components/Notes'
import NoteListPovider from './context/NoteListContext'
import NoteFormProvider from './context/NoteForm'

function App() {
	return (
		<NoteFormProvider>
			<Header>
				<Logo />
				<Actions />
			</Header>
			<NoteListPovider>
				<NotesArea>
					<Notes />
				</NotesArea>
			</NoteListPovider>
		</NoteFormProvider>
	)
}

export default App
