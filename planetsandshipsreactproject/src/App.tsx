import React from 'react';
import './App.css'
import PlanetsList from './PlanetsList';
import ShipsList from './ShipsList';

function App() {
    return (
        <div style={{ margin: '2rem' }}>
            <div style={{ margin: '2rem', fontFamily: 'Arial, sans-serif', fontSize: '10px', textAlign: 'center' }}>
                <h1>Planets And Ships API</h1>
            </div>
            <PlanetsList />
            <hr />
            <ShipsList />
            <hr />
            <button className="submitButton" onClick={submitAll}>Submit All</button>
        </div>
    );
}

async function submitAll() {
    try {
        const response = await fetch('http://localhost:5105/api/submission', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ planets: [], ships: [] })
        });
        const data = await response.text();
        alert(data);
    } catch (error) {
        console.error(error);
    }
}

export default App;