export function getCategories() {
    const endpoint = 'https://opentdb.com/api_category.php';
    return fetch(endpoint).then(res => res.json());
}

export function getTrivia(formData) {
    const endpoint = 'https://opentdb.com/api.php?';
    return fetch(`${endpoint}amount=${formData.amount}&category=${formData.category}&difficulty=${formData.difficulty}`).then(res => res.json()).catch((error) => {
        console.error('Error:', error);
    });
};

export function randomizeAnswers(results) {
    results.forEach(result => {
        let allAnswers = [...result.incorrect_answers, result.correct_answer]
        result.allAnswers = allAnswers.sort(() => Math.random() - 0.5)
    })
    return results;
}

export function correctAnswers(results) {
    return results.reduce((acc, val, idx) => {
        return { ...acc, [idx]: val.correct_answer }
    }, {})
}