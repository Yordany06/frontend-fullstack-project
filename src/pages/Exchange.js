import { useEffect, useState } from 'react';
import ExchangeList from '../components/exchangelist';

export default function ExchangePage() {
  const [rates, setRates] = useState([]);
  const [newRate, setNewRate] = useState('');

  useEffect(() => {
    async function fetchRates() {
      const response = await fetch('/api/exchangerate');
      const data = await response.json();
      setRates(data);
    }
    fetchRates();
  }, []);

  const handleAddRate = async () => {
    try {
      const response = await fetch('/api/exchangerate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rate: newRate }),
      });
      const data = await response.json();
      setRates((prev) => [...prev, data]);
      setNewRate('');
    } catch (error) {
      console.error('Error al agregar el tipo de cambio', error);
    }
  };

  return (
    <div>
      <h1>Tipos de Cambio</h1>
      <ExchangeList rates={rates} />
      <div>
        <input
          type="number"
          value={newRate}
          onChange={(e) => setNewRate(e.target.value)}
          placeholder="Nuevo tipo de cambio"
        />
        <button onClick={handleAddRate}>Agregar Tipo de Cambio</button>
      </div>
    </div>
  );
}
