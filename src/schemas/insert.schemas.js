import joi from "joi"

export const flightSchema = joi.object({  
  partida: joi().string().required(),
  destino: joi().string().required(),
  companhia: joi().string().required(),
  horaPartida: joi().string().required(),
  horaChagada: joi().string().required(),
  preco: joi().string().required()
})

export const citySchema = ({
  nome: joi().string().required()
})

export const accommodationSchema = ({
  cidade: joi().string().required(),
  nome: joi().string().required(),
  descricao: joi().string(),
  preco: joi().string().required()
})

export const convenienceSchema = ({
  nomeHospedagem: joi().string().required(),
  piscina: joi().boolean().required(),
  arCondicionado: joi().boolean().required(),
  estacionamento: joi().boolean().required(),
  cafeDaManha: joi().boolean().required()
})