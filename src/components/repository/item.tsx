import React from 'react'
import { Repository } from '../../stores/ducks/repositories/types'

interface Props {
    repository: Repository
}

const RepositoryItem = ({ repository }: Props) => {
    return <div>{repository.name}</div>
}

export default RepositoryItem