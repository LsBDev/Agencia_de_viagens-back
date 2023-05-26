import {Router} from "express"
import { getCities, getFlyCityId } from "../controllers/cities.controllers.js"

const citiesRouter = Router()
citiesRouter.get("/", getCities)
citiesRouter.get("/fly/city/:id", getFlyCityId)

export default citiesRouter