import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Planet {
    id: number;
    name: string;
    climate: string;
    terrain: string;
    population: number;
}

const PlanetsList: React.FC = () => {
    const [planets, setPlanets] = useState<Planet[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5105/api/planets')
            .then(response => setPlanets(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleChange = (index: number, field: keyof Planet, value: string | number) => {
        const updated = [...planets];
        (updated[index] as any)[field] = value;
        setPlanets(updated);
    };

    const handleSave = async (planet: Planet) => {
        try {
            await axios.put(`http://localhost:5105/api/planets/${planet.id}`, planet);
            alert('Planet updated!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '15px', textAlign: 'left' }}>
                <h2>Planets</h2>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Climate</th>
                        <th>Terrain</th>
                        <th>Population</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {planets.map((p, idx) => (
                        <tr key={p.id}>
                            <td>
                                <input
                                    type="text"
                                    value={p.name}
                                    onChange={(e) => handleChange(idx, 'name', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={p.climate}
                                    onChange={(e) => handleChange(idx, 'climate', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={p.terrain}
                                    onChange={(e) => handleChange(idx, 'terrain', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={p.population}
                                    onChange={(e) => handleChange(idx, 'population', +e.target.value)}
                                />
                            </td>
                            <td>
                                <button className="button" onClick={() => handleSave(p)}>Save</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default PlanetsList;