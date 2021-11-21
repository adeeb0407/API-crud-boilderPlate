import express from "express"
import {fetch, addData, fetchWithId, deleteData, updateData} from "../controllers/main.js"

const router = express.Router()

router.get('/', fetch)
router.post('/', addData)
router.get('/:mainId', fetchWithId)
router.delete('/:mainId', deleteData)
router.patch('/:mainId', updateData)

export default router