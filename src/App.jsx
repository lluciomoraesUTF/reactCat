import React from 'react';
import FormularioBusca from './components/formularioBusca';
import ResultadoBusca from './components/resultadoBusca';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Busca de Gatos por Raça 🐱</h1>
      <FormularioBusca />
      <ResultadoBusca />
    </div>
  );
}

export default App;
