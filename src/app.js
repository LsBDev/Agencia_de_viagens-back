import express, { json } from "express"
import cors from "cors"
import router from "./routes/index.routes.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(cors())
app.use(json())
app.use(router)

app.get("/health", (req, res) => {
  res.send("I'm Ok!")
})


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))