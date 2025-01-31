import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

// Definição da interface Game
interface Game {
  id: number;
  name: string;
  description: string;
}

const App: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/games")
      .then((response) => setGames(response.data))
      .catch((error) => console.error("Erro ao buscar os jogos:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Mago Games</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {games.map((game) => (
          <Link key={game.id} to={`/game/${game.id}`}>
            <Button className="w-40 h-20 text-lg">{game.name}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default App;
