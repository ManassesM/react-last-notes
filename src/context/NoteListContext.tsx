import { createContext, ReactNode, useContext, useState } from 'react'
import { NoteProps } from '../types/Note'

type NoteListContextType = {
	noteList: NoteProps[]
	setNoteList: (_: NoteProps[]) => void
}

type NoteListProviderType = {
	children: ReactNode
}

const NoteListContext = createContext({} as NoteListContextType)

export default function NoteListPovider({ children }: NoteListProviderType) {
	const [noteList, setNoteList] = useState<NoteProps[]>([])

	return (
		<NoteListContext.Provider value={{ noteList, setNoteList }}>
			{children}
		</NoteListContext.Provider>
	)
}

export function useNoteList() {
	const { noteList, setNoteList } = useContext(NoteListContext)

	return { noteList, setNoteList }
}
