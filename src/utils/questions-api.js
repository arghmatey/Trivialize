const BASE_URL = 'https://opentdb.com/api.php?amount=10';
const CATEG_URL = 'https://opentdb.com/api_category.php';

export function selectCategory() {
    return fetch(`${CATEG_URL}`, { mode: "cors" })
        .then(res => res.json());
}

export function getQuestions() {
    return fetch(`${BASE_URL}`, { mode: "cors" })
        .then(res => res.json());
}