import { RESULTS_GET, RESULTS_SET, RESULTS_ERROR, RESULTS_CLEAR } from 'CONSTANTS';

const defaultState = {
    details: null,
    error: null
}

const results = (state = defaultState, action) => {
  switch (action.type) {
    case RESULTS_SET:
      return {
        ...state,
        details: action.payload
      }
    case RESULTS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case RESULTS_CLEAR:
      return {
          ...defaultState
      }
    case RESULTS_GET:
    default:
      return {
          ...state
      }
  }
}

export default results