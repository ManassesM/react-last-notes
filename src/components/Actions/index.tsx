import * as S from './styles'

import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'

const Actions = () => {
	return (
		<S.Actions>
			<S.ActionButton>
				<FaPlus />
			</S.ActionButton>
			<S.ActionButton disabled>
				<FaPencilAlt />
			</S.ActionButton>
			<S.ActionButton disabled>
				<FaTrash />
			</S.ActionButton>
		</S.Actions>
	)
}

export default Actions
