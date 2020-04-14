// https://opentdb.com/api.php?

const BASE_URL = 'https://opentdb.com/api.php?';

export function getQuestions() {
    return fetch(`${BASE_URL}amount=10`, { mode: "cors" })
        .then(res => res.json());
}