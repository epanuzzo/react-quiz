import { QUIZES_GET, QUIZES_SET, QUIZES_DONE, QUIZES_ERROR } from 'CONSTANTS';

const defaultState = {
    quizes: null,
    errors: null,
    data: null
}

const home = (state = defaultState, action) => {
  switch (action.type) {
    case QUIZES_SET:
      return {
        ...state,
        quizes: action.payload
      }
    case QUIZES_ERROR:
      return {
        ...state,
        errors: action.payload
      }
    case QUIZES_DONE:
      return {
        ...state,
        data: action.payload
      }
    case QUIZES_GET:
    default:
      return {
          ...state
      }
  }
}

export default home