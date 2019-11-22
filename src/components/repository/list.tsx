import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Repository } from '../../stores/ducks/repositories/types';
import { loadRequest } from '../../stores/ducks/repositories/actions';
import { ApplicationState } from '../../stores/index';
import RepositoryItem from './item';

const RepositoryList = () => {
    const dispatch = useDispatch();
    const repositories: Repository[] = useSelector(
        (state: ApplicationState) => state.repositories.data,
    );

    useEffect(() => {
        dispatch(loadRequest());
    }, [dispatch]);

    return (
        <div>
            {repositories.map((repository) => (
                <RepositoryItem key={repository.id} repository={repository} />
            ))}
        </div>
    );
};

export default RepositoryList;
