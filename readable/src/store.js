import { createStore } from 'redux'
import categoriesReducer from './reducers/categories'
import commentsReducer from './reducers/comments'
import postReducer from './reducers/posts'

const store = createStore(postReducer)

export default store;