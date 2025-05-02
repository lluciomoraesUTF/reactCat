import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery, setResultados, setRacas } from '../contexts/sliceBusca';

function FormularioBusca() {
  const [valorInput, setValorInput] = useState('');
  const dispatch = useDispatch();

  const buscarPorRaça = async (raça) => {
    try {
      const respostaRaças = await fetch('https://api.thecatapi.com/v1/breeds');
      const raças = await respostaRaças.json();

      const raçaEncontrada = raças.find((r) =>
        r.name.toLowerCase().includes(raça.toLowerCase())
      );

      if (!raçaEncontrada) {
        alert('Raça não encontrada!');
        dispatch(setResultados([]));
        return;
      }

      const respostaImagens = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=5&breed_ids=${raçaEncontrada.id}`
      );
      const imagens = await respostaImagens.json();
      dispatch(setResultados(imagens));
    } catch (erro) {
      alert('Erro ao buscar imagens');
      dispatch(setResultados([]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valorInput.trim() === '') {
      alert('Digite uma raça para buscar!');
      return;
    }
    dispatch(setQuery(valorInput));
    buscarPorRaça(valorInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma raça de gato (ex: bengal)"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default FormularioBusca;