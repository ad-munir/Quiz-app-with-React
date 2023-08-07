/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { getUsers } from './apiHandling';

const Api = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        getUsers()
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
            });
    }, []);

    return (
        <div className="App">
            <h1>Fetch API Example</h1>
            {data ? (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>

            ) : <p>Loading data...</p>
            }
        </div>
    );
}

export default Api;
