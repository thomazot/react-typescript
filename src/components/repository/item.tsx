import React from 'react'
import { Repository } from '../../stores/repositories/types'

interface Props {
    repository: Repository
}

const RepositoryItem = ({ repository }: Props) => <div>{repository.name}</div>

export default RepositoryItem
