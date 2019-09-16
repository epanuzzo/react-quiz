import axios from 'axios';
import ls from 'local-storage';
import { urls, type } from 'CONSTANTS';

const getContent = (type, url, isFunction = null, params = null, ...args) => {
    const localStorageData = ls.get(type);
    if (url && !localStorageData) {
        if (isFunction) {
            if(typeof url === 'function') {
                return axios.get(url(...args), params);
            }

            return null;
        }
        return axios.get(url);
    }
    
    if (localStorageData) {
        return { data: localStorageData };
    } 
    
    return null;
}
const isFunction = true;
const emptyParams = null;

export const getQuizes = () => getContent(type.quizes, urls.quizes);
export const getQuestions = (quizId) => getContent(type.questions, urls.questions, isFunction, emptyParams, quizId);
export const getAnswers = (quizId, questionId) => getContent(type.answers, urls.answers, isFunction, emptyParams, quizId, questionId);
export const getResults = (quizId, answers) => getContent(type.results, urls.results, isFunction, { params: { answers } }, quizId);
