import { db } from "../database/database.connection.js";

export function getCitiesDB() {
  const result = db.query(`SELECT * FROM city;`)
  return result  
}

export function getInfoCityIdDB(params) {
  const {id} = params
  // buscar nas tabelas de voo e hospedagem e fazer um join para enviar as informações necessárias para o frontend
  const result = db.query(`

    SELECT * FROM city WHERE id = $1;

  `, [id])
  return result
}