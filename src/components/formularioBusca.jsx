import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { definirTermo } from '../contexts/sliceBusca'; 

function FormularioBusca() {
  const [valorInput, setValorInput] = useState('');
  const dispatch = useDispatch();

  const lidarComEnvio = (e) => {
    e.preventDefault();
    if (valorInput.trim() === '') {
      alert('Por favor, digite algo para buscar!');
      return;
    }
    dispatch(definirTermo(valorInput)); 
    console.log('Buscando por:', valorInput); 
  };

  return (
    <form onSubmit={lidarComEnvio}>
      <input
        type="text"
        placeholder="Digite sua busca..."
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default FormularioBusca;
