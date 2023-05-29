import { insertFlightDB } from "../repositories/flights.repository.js"

export async function insertFlight(req, res) {
  try {
    await insertFlightDB(req.body)
    res.sendStatus(200)

  } catch(err) {
    res.status(500).send(err.message)
  }
}