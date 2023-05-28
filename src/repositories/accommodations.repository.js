import { db } from "../database/database.connection.js"

export function getHostingCityIdDB(params) {
  const { id } = params

  const result = db.query(`
    SELECT a.id, a.name, a.description, a.price
    FROM accommodation a
    WHERE a.city_id = $1;
  `, [id])
  return result
}

export function getHostingIdDB(params) {
  const { id } = params

  const result = db.query(`
    SELECT a.id, a.name, a.description, a.price, c.name AS city_name,
      json_agg(json_build_object('photo_url', p.photo_url)) AS photos, cv.pool, cv.air_conditioner, cv.parking, cv.breakfast
    FROM
      accommodation AS a
      JOIN city AS c ON a.city_id = c.id
      LEFT JOIN photo AS p ON a.id = p.accommodation_id
      JOIN convenience AS cv ON a.id = cv.accommodation_id
    WHERE a.id = $1
      GROUP BY a.id, a.name, a.description, a.price, c.name, cv.pool, cv.air_conditioner, cv.parking, cv.breakfast;
  `, [id])
  return result
}


