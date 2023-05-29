import { db } from "../database/database.connection.js";

export function insertFlightDB(body) {
  const {partida, destino, companhia, horaPartida, horaChagada, preco, data} = body
  const result  = db.query(`
    INSERT INTO flight (city_id_match, city_id_destiny, company, departure_time, arrival_time, price, flight_date)
    SELECT
      c1.id AS city_id_match,
      c2.id AS city_id_destiny,
      $3 AS company,
      $4 ::TIME AS departure_time,
      $5 ::TIME AS arrival_time,
      $6 AS price,
      %7 ::DATE AS flight_date
    FROM city c1, city c2
      WHERE c1.name = $1 AND c2.name = $2;
  `, [partida, destino, companhia, horaPartida, horaChagada, preco, data])
  return result
}
