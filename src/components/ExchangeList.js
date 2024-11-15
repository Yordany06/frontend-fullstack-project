export default function ExchangeList({ rates }) {
    return (
      <ul>
        {rates.map((rate) => (
          <li key={rate.id}>
            Tipo de Cambio: {rate.rate}, Fecha: {new Date(rate.date).toLocaleString()}
          </li>
        ))}
      </ul>
    );
  }
  