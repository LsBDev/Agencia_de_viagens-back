import {Router} from "express"
import { getCities, getInfoCityId } from "../controllers/cities.controllers.js"

const citiesRouter = Router()

citiesRouter.get("/", getCities)
citiesRouter.get("/info/city/:id", getInfoCityId)


export default citiesRouter