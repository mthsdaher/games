import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Game {
  id: number;
  name: string;
  description: string;
}

export default function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/games`)
      .then((response) => {
        const foundGame = response.data.find((g: Game) => g.id === Number(id));
        setGame(foundGame);
      })
      .catch((error) => console.error("Erro ao buscar jogo:", error));
  }, [id]);

  if (!game) {
    return <div className="text-white text-center mt-10">Jogo não encontrado.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">{game.name}</h1>
      <p className="mt-4">{game.description}</p>
    </div>
  );
}
