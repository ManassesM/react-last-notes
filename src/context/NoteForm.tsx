import { createContext, ReactNode, useContext, useState } from 'react'

type NoteFormContextType = {
	showForm: boolean
	setShowForm: (_: boolean) => void
	title: string
	setTitle: (_: string) => void
	description: string
	setDescription: (_: string) => void
}

type NoteFormProviderType = {
	children: ReactNode
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
	const {
		showForm,
		setShowForm,
		title,
		setTitle,
		description,
		setDescription,
	} = useContext(NoteFormContext)

	return { showForm, title, description, setShowForm, setTitle, setDescription }
}
