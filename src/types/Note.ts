export type NoteProps = {
	id: string
	title: string
	description: string
	highlight?: boolean
	setHighlight?: (_: boolean) => void
}
