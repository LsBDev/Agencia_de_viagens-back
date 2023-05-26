import { db } from "../database/database.connection.js";

export function getCitiesDB() {
  const result = db.query(`SELECT * FROM city;`)
  return result  
}

export function getFlyCityIdDB(params) {
  const {id} = params
  // buscar nas tabelas de voo e fazer um join para enviar as informações necessárias para o frontend
  const result = db.query(`
    SELECT f.flight_date, f.departure_time, f.arrival_time, f.company, f.price, c_departure.name AS departure_city, c_destiny.name AS destination_city
      FROM flight f
        JOIN city c_departure ON f.city_id_match = c_departure.id
        JOIN city c_destiny ON f.city_id_destiny = c_destiny.id
        WHERE f.city_id_destiny = $1;
  `, [id])
  return result
}