// https://opentdb.com/api.php?

const BASE_URL = 'https://opentdb.com/api.php?amount=10';

export function getQuestions() {
    return fetch(`${BASE_URL}`, { mode: "cors" })
        .then(res => res.json());
}