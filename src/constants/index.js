// API urls
const endpoint = 'https://printful.com/test-quiz.php';
export const urls = {
    quizes: endpoint + '?action=quizzes',
    questions: (quizId) => (endpoint + '?action=questions&quizId=' + quizId),
    answers: (quizId, questionId) => (endpoint + '?action=answers&quizId=' + quizId + '&questionId=' + questionId),
    results: (quizId) => (endpoint + '?action=submit&quizId=' + quizId)
}

// Data type
export const type = {
    quizes: 'quizes',
    questions: 'questions',
    answers: 'answers',
    results: 'results'
}

// Actions
export const QUIZES_GET = 'QUIZES_GET';
export const QUIZES_SET = 'QUIZES_SET';
export const QUIZES_ERROR = 'QUIZES_ERROR';
export const QUIZES_DONE = 'QUIZES_DONE';
export const QUIZES_CLEAR = 'QUIZES_CLEAR';

export const QUESTIONS_GET = 'QUESTIONS_GET';
export const QUESTIONS_SET = 'QUESTIONS_SET';
export const QUESTIONS_ERROR = 'QUESTIONS_ERROR';
export const QUESTIONS_STEP = 'QUESTIONS_STEP';
export const QUESTIONS_ANSWER = 'QUESTIONS_ANSWER';
export const QUESTIONS_CLEAR = 'QUESTIONS_CLEAR';

export const ANSWERS_GET = 'ANSWERS_GET';
export const ANSWERS_SET = 'ANSWERS_SET';
export const ANSWERS_ERROR = 'ANSWERS_ERROR';
export const ANSWERS_CLEAR = 'ANSWERS_CLEAR';

export const RESULTS_GET = 'RESULTS_GET';
export const RESULTS_SET = 'RESULTS_SET';
export const RESULTS_ERROR = 'RESULTS_ERROR';
export const RESULTS_CLEAR = 'RESULTS_CLEAR';
