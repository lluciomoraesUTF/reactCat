import React from 'react';
import { useSelector } from 'react-redux';

function ResultadoBusca() {
  const resultados = useSelector((state) => state.busca.resultados);

  if (!Array.isArray(resultados) || resultados.length === 0) {
    return <p>Nenhum resultado encontrado.</p>;
  }

  return (
    <div>
      <h2>Imagens encontradas:</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {resultados.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt="Gato"
            style={{ width: '200px', borderRadius: '8px' }}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultadoBusca;
