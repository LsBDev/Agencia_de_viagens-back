import joi from "joi"

export const flightSchema = joi.object({  
  partida: joi.string().required(),
  destino: joi.string().required(),
  companhia: joi.string().required(),
  horaPartida: joi.string().required(),
  horaChagada: joi.string().required(),
  preco: joi.string().required(),
  data: joi.string().required()
})

export const citySchema = joi.object({
  nome: joi.string().required()
})

export const accommodationSchema = joi.object({
  cidade: joi.string().required(),
  nome: joi.string().required(),
  descricao: joi.string(),
  preco: joi.string().required()
})

export const convenienceSchema = joi.object({
  hospedagem: joi.string().required(),
  piscina: joi.boolean().required(),
  arCondicionado: joi.boolean().required(),
  estacionamento: joi.boolean().required(),
  cafeDaManha: joi.boolean().required()
})

export const fotoSchema = joi.object({
  hospedagem: joi.string().required(),
  foto: joi.string().required()
})