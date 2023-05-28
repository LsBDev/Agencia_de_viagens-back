import { Router } from "express"
import { getAccommodationsCityId, getHostingId } from "../controllers/accommodations.controllers.js"

const accommodationsRouter = Router()
accommodationsRouter.get("/accommodation/city/:id", getAccommodationsCityId)
accommodationsRouter.get("/accommodation/:id", getHostingId)

export default accommodationsRouter