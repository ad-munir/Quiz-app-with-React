const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log('Fetched data:', data); // Log the fetched data
    return data;
}

export function getTodos() {
    return fetchData('/todos');
}

export function getUsers() {
    return fetchData('/users');
}

