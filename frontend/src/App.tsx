import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Game {
  id: number;
  name: string;
  description: string;
}

const App: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    // Fazer uma requisição GET para o backend para obter os jogos
    axios.get('http://localhost:3001/games')
      .then(response => { 
        setGames(response.data);
      })
      .catch(error => {
        console.error("Houve um erro ao buscar os jogos:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Jogos</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
