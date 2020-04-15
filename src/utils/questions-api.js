// https://opentdb.com/api.php?

const BASE_URL = 'https://opentdb.com/api.php?amount=10';
const CAT_URL = 'https://opentdb.com/api_category.php';

export function selectCategory() {
    return fetch(`${CAT_URL}`, { mode: "cors" })
        .then(res => res.json());
}

export function getQuestions() {
    return fetch(`${BASE_URL}`, { mode: "cors" })
        .then(res => res.json());
}