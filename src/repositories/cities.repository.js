import { db } from "../database/database.connection.js";

export function getAllCities() {
  const result = db.query(`SELECT * FROM city;`)
  return result  
}