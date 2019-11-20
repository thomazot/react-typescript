import React, { useEffect } from 'react'
import { Repository } from '../../stores/ducks/repositories/types';
import { useSelector, useDispatch } from 'react-redux';
import { loadRequest } from '../../stores/ducks/repositories/actions';
import { ApplicationState } from '../../stores/index';
import RepositoryItem from './item';

const RepositoryList = () => {
    const dispatch = useDispatch()
    const repositories: Repository[] = useSelector((state: ApplicationState ) => state.repositories.data)
    
    const load = () => {
        dispatch(loadRequest())
    }

    useEffect(load, [])

    return <div>
        {repositories.map((repository) => <RepositoryItem key={repository.id} repository={repository} />)}
    </div>
}

export default RepositoryList