import tokenService from './tokenService';

const BASE_URL = '/api/trivias';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(trivia) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(trivia)
    }).then(res => res.json());
}

export function update(trivia) {
    return fetch(`${BASE_URL}/${trivia._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(trivia)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}