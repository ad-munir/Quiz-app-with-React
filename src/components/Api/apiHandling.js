const BASE_URL = 'http://localhost:8080';

async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Fetched data:', data); // Log the fetched data
    return data;
}


export function fetchAllQuestions() {
    return fetchData('/question');
}

export function createQuestion(question) {
    return fetch('/question', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(question),
    }).then(response => response.json());
}