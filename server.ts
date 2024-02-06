import express,{Request, Response} from "express";
import axios from "axios";

const app = express();
const API_KEY = "985b185059d5462389d135525240102";

const PORT: number = process.env.PORT ?  parseInt(process.env.PORT) : 3000;

app.get("/test", (req: Request, res: Response) => {
    res.send("le serveur fonctionne bien");
})

app.get("/paris", async (req, res) => {
    try {
        const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=985b185059d5462389d135525240102&q=Paris');
        const weatherData = response.data; // Les données météo de Paris
        res.json(weatherData); // Renvoie les données au client
    } catch (error) {
        console.error('Erreur lors de la récupération des données météo', error);
    }
});

app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'execution sur le port ${PORT}`)});
