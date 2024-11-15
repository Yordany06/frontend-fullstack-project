export async function getExchangeRates() {
    const response = await fetch('/api/exchangerate');
    if (!response.ok) {
      throw new Error('Error al obtener los tipos de cambio');
    }
    return await response.json();
  }
  
  export async function addExchangeRate(rate) {
    const response = await fetch('/api/exchangerate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rate }),
    });
    if (!response.ok) {
      throw new Error('Error al agregar el tipo de cambio');
    }
    return await response.json();
  }
  