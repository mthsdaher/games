import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());  
app.use(express.json()); 


app.get('/games', (req, res) => {
  res.json([
    { id: 1, name: 'Game 1', description: 'Descrição do jogo 1' },
    { id: 2, name: 'Game 2', description: 'Descrição do jogo 2' },
  ]);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
