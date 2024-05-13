import express from "express"

import * as earthquakeController from "../controllers/earthquake.controller.js"

const router = express.Router()

router.post("/earthquakes", earthquakeController.CreateEarthquake)
router.get("/earthquakes", earthquakeController.GetAllEarthquake)
router.get("/earthquakes/:id", earthquakeController.GetEarthquake)
router.patch("/earthquakes/:id", earthquakeController.UpdateEarthquake)
router.delete("/earthquakes/:id", earthquakeController.DeleteEarthquake)

export default router