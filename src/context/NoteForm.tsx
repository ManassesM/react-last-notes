import { createContext, ReactChild, useContext, useState } from 'react'

type NoteFormProviderType = {
	children: ReactChild[]
}

type NoteFormContextType = {
	showForm: boolean
	setShowForm: (_: boolean) => void
	title: string
	setTitle: (_: string) => void
	description: string
	setDescription: (_: string) => void
}

const NoteFormContext = createContext({} as NoteFormContextType)

export default function NoteFormProvider({ children }: NoteFormProviderType) {
	const [showForm, setShowForm] = useState(false)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	return (
		<NoteFormContext.Provider
			value={{
				showForm,
				setShowForm,
				title,
				setTitle,
				description,
				setDescription,
			}}
		>
			{children}
		</NoteFormContext.Provider>
	)
}

export function useNoteForm() {
	const context = useContext(NoteFormContext)
	const {
		showForm,
		setShowForm,
		title,
		setTitle,
		description,
		setDescription,
	} = context

	return { showForm, title, description, setShowForm, setTitle, setDescription }
}
