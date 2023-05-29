import {Router} from "express"
import { validadeSchema } from "../middlewares/validadeSchema.middleware.js"
import { flightSchema } from "../schemas/insert.schemas.js"
import { insertFlight } from "../controllers/flights.controllers.js"

const flightRouter = Router()

flightRouter.post("/flights", validadeSchema(flightSchema), insertFlight)


export default flightRouter