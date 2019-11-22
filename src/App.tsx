import React from 'react'
import { Provider } from 'react-redux'
import store from './stores'
import RepositoryList from './components/repository/list'

const App: React.FC = () => (<Provider store={store}><RepositoryList /></Provider>)

export default App
