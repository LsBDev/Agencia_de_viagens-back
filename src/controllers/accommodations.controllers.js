import { getAccommodationsCityIdDB } from "../repositories/accommodations.repository.js";


export async function getAccommodationsCityId(req, res) {
  try {
    const { rows } = await getAccommodationsCityIdDB(req.params)
    res.status(200).send(rows)
    
  } catch(err) {
    res.status(500).send(err.message)
  }
}