import { createStore } from 'redux'
import reducer from './reducers/testReducer'

const store = createStore(reducer)

export default store;