import { Router } from "express"
import { getAccommodationsCityId } from "../controllers/accommodations.controllers.js"

const accommodationsRouter = Router()
accommodationsRouter.get("/accommodation/city/:id", getAccommodationsCityId)

export default accommodationsRouter