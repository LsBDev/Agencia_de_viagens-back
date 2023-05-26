import {Router} from "express"
import citiesRouter from "./cities.routes.js"
import accommodationsRouter from "./accommodation.routes.js"

const router = Router()
router.use(citiesRouter)
router.use(accommodationsRouter)

export default router