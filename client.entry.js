import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import { render } from 'react-dom'

import SimpleForm from './SimpleForm.js'

const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

const submitHandler = (e) => {
  e.preventDefault()
  console.log('store :', store.getState())
}

render(
  <Provider store={store}>
    <SimpleForm onSubmit={submitHandler}/>
  </Provider>,
  document.getElementById('appRoot'))