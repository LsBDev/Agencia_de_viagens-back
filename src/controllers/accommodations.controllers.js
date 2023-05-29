import { getHostingCityIdDB, getHostingIdDB } from "../repositories/accommodations.repository.js";


export async function getAccommodationsCityId(req, res) {
  try {
    const { rows } = await getHostingCityIdDB(req.params)
    res.status(200).send(rows)
    
  } catch(err) {
    res.status(500).send(err.message)
  }
}

export async function getHostingId(req, res) {
  try {
    const { rows } = await getHostingIdDB(req.params)
    res.status(200).send(rows)

  } catch(err) {
    res.status(500).send(err.message)
  }
}