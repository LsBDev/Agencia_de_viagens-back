import { getAllCities } from "../repositories/cities.repository.js"

export async function getCities(req, res) {
  try {
    const { rows } = await getAllCities()
    console.log(rows)
    res.send(rows)

  } catch(err) {
    res.status(500).send(err.message)
  }
}