import { db } from "../database/database.connection.js"

export function getAccommodationsCityIdDB(params) {
  const { id } = params

  const result = db.query(`
    SELECT json_agg(json_build_object('photo_url', ph.photo_url)) AS photos, 
      ac.name, 
      ac.price, 
      cv.pool, 
      cv.air_conditioner,
      cv.parking, 
      cv.breakfast
    FROM accommodation ac
      JOIN photo ph ON ac.id = ph.accommodation_id
      JOIN convenience cv ON ac.id = cv.accommodation_id
      WHERE ac.city_id = $1
    GROUP BY ac.id, ac.name, ac.price, cv.pool, cv.air_conditioner, cv.parking, cv.breakfast;
  `, [id])
  return result
}