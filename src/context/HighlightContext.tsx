import { createContext, ReactNode, useContext, useState } from 'react'

type HighlightContextType = {
	isHighlighted: string
	setIsHighlighted: (_: string) => void
}

type HighlightProviderType = {
	children: ReactNode
}

const HighlightContext = createContext({} as HighlightContextType)

export default function HighlightProvider({ children }: HighlightProviderType) {
	const [isHighlighted, setIsHighlighted] = useState('')

	return (
		<HighlightContext.Provider value={{ isHighlighted, setIsHighlighted }}>
			{children}
		</HighlightContext.Provider>
	)
}

export function useHighlight() {
	const context = useContext(HighlightContext)
	const { isHighlighted, setIsHighlighted } = context

	return { isHighlighted, setIsHighlighted }
}
