import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `OPEN_MODAL`) {
    return Object.assign({}, state, {
      modalIsOpen: true,
			image: action.image,
    })
  }
	if (action.type === `CLOSE_MODAL`) {
    return Object.assign({}, state, {
      modalIsOpen: false,
			image: '',
    })
  }
	if (action.type === `CLOSE_INDEX_MODAL`) {
    return Object.assign({}, state, {
      indexModalIsOpen: false,
    })
  }
	
  return state
}

const initialState = { modalIsOpen: false, image: '', indexModalIsOpen: true }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
