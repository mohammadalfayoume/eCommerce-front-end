// here we will connect all of our reducers and any middleware stuff
/* 
createStore: it's a function to create your store
combineReducers: if you have multi reducers, each one handle a certain piece of functionality
applyMiddleware: we can apply any middleware such as thunk
*/
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer,productDetailsReducer } from './reducers/productReducers.js'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
