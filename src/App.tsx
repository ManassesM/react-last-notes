import Header from './components/Header'
import Logo from './components/Logo'
import Actions from './components/Actions'
import NotesArea from './components/NotesArea'
import Notes from './components/Notes'
import NoteListPovider from './context/NoteListContext'
import NoteFormProvider from './context/NoteForm'
import HighlightProvider from './context/HighlightContext'

function App() {
	return (
		<NoteFormProvider>
			<NoteListPovider>
				<HighlightProvider>
					<Header>
						<Logo />
						<Actions />
					</Header>
					<NotesArea>
						<Notes />
					</NotesArea>
				</HighlightProvider>
			</NoteListPovider>
		</NoteFormProvider>
	)
}

export default App
