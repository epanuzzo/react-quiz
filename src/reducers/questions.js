import { QUESTIONS_GET, QUESTIONS_SET, QUESTIONS_ERROR, QUESTIONS_STEP, QUESTIONS_ANSWER, QUESTIONS_CLEAR } from 'CONSTANTS';

const defaultState = {
    list: null,
    step: 0,
    errors: null
}

const questions = (state = defaultState, action) => {
  switch (action.type) {
    case QUESTIONS_SET:
      return {
        ...state,
        list: action.payload
      }
    case QUESTIONS_ANSWER:
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.step]: {
            ...state.list[action.payload.step],
            answer: action.payload.answer
          }
        }
      }
    case QUESTIONS_CLEAR:
      return {
          ...defaultState
      } 
    case QUESTIONS_STEP:
      return {
        ...state,
        step: action.payload
      }
    case QUESTIONS_ERROR:
      return {
        ...state,
        errors: action.payload
      }      
    case QUESTIONS_GET:
    default:
      return {
          ...state
      }
  }
}

export default questions