import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Ship {
    id: number;
    name: string;
    model: string;
    manufacturer: string;
    cost: number;
}

const ShipsList: React.FC = () => {
    const [ships, setShips] = useState<Ship[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5105/api/ships')
            .then(response => setShips(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleChange = (index: number, field: keyof Ship, value: string | number) => {
        const updated = [...ships];
        (updated[index] as any)[field] = value;
        setShips(updated);
    };

    const handleSave = async (ship: Ship) => {
        try {
            await axios.put(`http://localhost:5105/api/ships/${ship.id}`, ship);
            alert('Ship updated!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '15px', textAlign: 'left' }}>
                <h2>Ships</h2>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ships.map((s, idx) => (
                        <tr key={s.id}>
                            <td>
                                <input
                                    type="text"
                                    value={s.name}
                                    onChange={(e) => handleChange(idx, 'name', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={s.model}
                                    onChange={(e) => handleChange(idx, 'model', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={s.manufacturer}
                                    onChange={(e) => handleChange(idx, 'manufacturer', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={s.cost}
                                    onChange={(e) => handleChange(idx, 'cost', +e.target.value)}
                                />
                            </td>
                            <td>
                                <button className="button" onClick={() => handleSave(s)}>Save</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default ShipsList;