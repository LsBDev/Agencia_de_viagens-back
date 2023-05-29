import {Router} from "express"
import { getCities, getFlyCityId, insertCity } from "../controllers/cities.controllers.js"
import { validadeSchema } from "../middlewares/validadeSchema.middleware.js"
import { citySchema } from "../schemas/insert.schemas.js"

const citiesRouter = Router()
citiesRouter.get("/", getCities)
citiesRouter.get("/fly/city/:id", getFlyCityId)
citiesRouter.post("/city", validadeSchema(citySchema), insertCity)

export default citiesRouter