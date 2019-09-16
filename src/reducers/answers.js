import { ANSWERS_GET, ANSWERS_SET, ANSWERS_CLEAR } from 'CONSTANTS';

const defaultState = {
    list: {}
}

const answers = (state = defaultState, action) => {
  switch (action.type) {
    case ANSWERS_SET:
      return {
        ...state,
        list: {
          ...state.list,
          ...action.payload
        }
      }
    case ANSWERS_CLEAR:
      return {
          ...defaultState
      }    
    case ANSWERS_GET:
    default:
      return {
          ...state
      }
  }
}

export default answers