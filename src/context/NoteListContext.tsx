import { createContext, ReactChild, useContext, useState } from 'react'

type Note = {
	id: string
	title: string
	description: string
	highlight?: boolean
	setHighlight?: (_: boolean) => void
}

type NoteListContextType = {
	noteList: Note[]
	setNoteList: (_: Note[]) => void
}

type NoteListProviderType = {
	children: ReactChild
}

const NoteListContext = createContext({} as NoteListContextType)

export default function NoteListPovider({ children }: NoteListProviderType) {
	const [noteList, setNoteList] = useState<Note[]>([])

	return (
		<NoteListContext.Provider value={{ noteList, setNoteList }}>
			{children}
		</NoteListContext.Provider>
	)
}

export function useNoteList() {
	const context = useContext(NoteListContext)
	const { noteList, setNoteList } = context

	return { noteList, setNoteList }
}
