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
export const QUIZES_SHOOSED = 'QUIZES_CHOOSED';
