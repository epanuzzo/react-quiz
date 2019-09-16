import { QUIZES_GET } from 'CONSTANTS';

const defaultState = {
    quizes: null
}

const home = (state = defaultState, action) => {
  switch (action.type) {
    case QUIZES_GET:
      return {
        ...state,
        quizes: action.payload
      }
    default:
      return {
          ...state
      }
  }
}

export default home