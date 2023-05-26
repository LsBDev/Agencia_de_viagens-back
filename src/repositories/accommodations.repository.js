import { db } from "../database/database.connection.js"

export function getAccommodationsCityIdDB(params) {
  const { id } = params

  const result = db.query(`
    SELECT json_agg(json_build_object('photo_url', p.photo_url)) AS photos, 
      a.name, 
      a.price, 
      c.pool, 
      c.air_conditioner, 
      c.parking, 
      c.breakfast
    FROM accommodation AS a
      JOIN photo AS p ON a.id = p.accommodation_id
      JOIN convenience AS c ON a.id = c.accommodation_id
      WHERE a.city_id = $1
    GROUP BY a.id, a.name, a.price, c.pool, c.air_conditioner, c.parking, c.breakfast;
  `, [id])
  return result
}