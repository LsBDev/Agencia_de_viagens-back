import { getInfoCityIdDB, getCitiesDB } from "../repositories/cities.repository.js"

export async function getCities(req, res) {
  try {
    const { rows } = await getCitiesDB()
    res.send(rows)

  } catch(err) {
    res.status(500).send(err.message)
  }
}

export async function getInfoCityId(req, res) {
  try {
    const { rows } = await getInfoCityIdDB(req.params)
    res.status(200).send(rows)

  }catch(err) {
    res.status(500).send(err.message)
  }
}