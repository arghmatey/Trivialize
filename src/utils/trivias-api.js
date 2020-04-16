const BASE_URL = '/api/trivias';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(triv) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(triv)
    }).then(res => res.json());
}